---

# 📄 README.md

```markdown
# pixLune - Create Your Own Style Image 🎨✨

pixLune is a premium AI image generation web app where users can create stunning and unique images based on their own prompts.  
It offers a clean, modern experience powered by advanced AI from Hugging Face's Stable Diffusion model.

---

## ✨ Features

- 🔥 AI-based image generation using custom text prompts.
- 🔐 Secure authentication with JWT tokens.
- 🧠 Stores user's generated image history.
- 🎨 Premium, minimal and responsive UI.
- ⏳ Disables "Generate" button during image creation to prevent duplicate requests.
- 🔻 Smooth dropdown profile menu with logout functionality.

---

## 🛠️ Tech Stack

### Backend:
- **Framework:** Node.js + Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT tokens, Email Verification
- **Email Service:** Nodemailer
- **AI Model Integration:** Hugging Face Inference API (Stable Diffusion)
- **Cloud Services:** Firebase (for user profile or storage)

### Frontend:
- **Framework:** React.js
- **Styling:** Tailwind CSS (optional, if used)
- **State Management:** React Hooks

---

## 📂 Project Structure

```bash
.
├── client/           # Frontend (React app)
├── server/           # Backend (Node.js + Express)
├── .gitignore        # Git ignored files
├── README.md         # Project documentation (you are here)
```

---

## 📂 server/ Structure

```bash
server/
├── config/
│   └── firebase.js         # Firebase configuration
│
├── controllers/
│   ├── authController.js    # User authentication and registration
│   └── imageController.js   # Handle AI image generation
│
├── middlewares/
│   ├── auth.js              # JWT authentication middleware
│   └── error.js             # Global error handler
│
├── models/
│   ├── User.js              # User model
│   ├── Image.js             # Generated images history
│   └── EmailToken.js        # Email verification token
│
├── routes/
│   ├── authRoutes.js        # Authentication routes
│   └── imageRoutes.js       # Image generation routes
│
├── utils/
│   ├── sendMail.js          # Email utility
│   └── aiClient.js          # Hugging Face API client
│
├── .env                     # Environment variables
├── app.js                   # Express app
└── server.js                # Server entry point
```

---

## 🧠 AI Model Used

- **Model:** [Stable Diffusion XL Base 1.0](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)
- **Provider:** Hugging Face Inference API
- **API Endpoint:**  
  ```
  https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0
  ```

---

## 📜 API Endpoints

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login existing user |
| POST | `/api/image/generate` | Generate an AI image based on a prompt (Protected Route 🔒) |
| GET  | `/api/image/history` | Get user’s image generation history (Protected Route 🔒) |

---

## 🛡️ Authentication

- JWT authentication: token stored in localStorage after login.
- Protected routes require token in `Authorization: Bearer <token>` header.
- Email verification during registration.

---

## 🚀 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/pixLune.git

# 2. Backend Setup
cd server
npm install

# 3. Frontend Setup
cd ../client
npm install

# 4. Setup Environment Variables
Create `.env` file in /server and /client if needed.

# 5. Start Backend
cd ../server
npm run dev

# 6. Start Frontend
cd ../client
npm start
```

---

## 📄 .env Variables (server/.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=1d

HUGGINGFACE_API_TOKEN=your_huggingface_api_token

EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
```

---

## 📢 Special Frontend Touches

- Heading text:  
  **pixLune: Create Your Own Style Image**
- Top right:  
  Profile circle with **first character** of user’s name.
- On profile click:  
  Clean dropdown menu with **Logout**.
- Disable Generate button while image is processing.
- Fully mobile-responsive and clean look.

---

## 🎯 Future Improvements

- Add custom image sizes and styles.
- Add credits-based or subscription-based premium usage.
- Multi-model options (choose different AI models).
- Improve email template design.

---

## 📜 License

This project is open-sourced under the [MIT License](LICENSE).

---
---
