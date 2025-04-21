
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const HUGGINGFACE_TOKEN = process.env.HUGGINGFACE_TOKEN;
const MODEL_URL = 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0';

export const generateImage = async (prompt) => {
  const input = { inputs: prompt };

  try {
    const response = await axios.post(MODEL_URL, input, {
      headers: {
        Authorization: `Bearer ${HUGGINGFACE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      responseType: 'arraybuffer',
    });

    const imageBuffer = Buffer.from(response.data);
    const format = 'image/png';

    return { image: imageBuffer, format };
  } catch (err) {
    if (err.response?.data instanceof Buffer) {
      console.error('Error response:', err.response.data.toString('utf-8'));
    } else {
      console.error('Error generating image:', err.message);
    }
    throw new Error('Image generation failed');
  }
};
