import { generateImage } from '../utils/huggingFaceRequest.js';
import Image from '../models/Image.js'; // Image model
import cloudinary from '../config/cloudinary.js';  
import { PassThrough } from 'stream';

// generateImageController 
export const generateImageController = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ success: false, message: 'Prompt is required' });
    }
    // Ensure user is available
    const user = req.user;
    if (!user) {
      return res.status(401).json({ success: false, message: 'Unauthorized: No user info' });
    }

    // Generate image from HuggingFace
    const { image: imageBuffer, format } = await generateImage(prompt);

    // Upload to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'image', folder: 'pixlune' },
      async (error, result) => {
        if (error) {
          console.error('Cloudinary Upload Error:', error);
          return res.status(500).json({ success: false, message: 'Failed to upload image' });
        }

        // Save to MongoDB
        const newImage = new Image({
          user: user._id,   // <-- fixed here
          prompt,
          imageUrl: result.secure_url,
        });

        await newImage.save();

        return res.status(201).json({
          success: true,
          imageUrl: result.secure_url,
          message: 'Image generated successfully!',
        });
      }
    );

    const bufferStream = new PassThrough();
    bufferStream.end(imageBuffer);
    bufferStream.pipe(uploadStream);

  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
