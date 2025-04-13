# **App Name**: SolarisAI

## Core Features:

- Solar Panel Damage Detection: Upload an image of your solar panel, and the AI tool will identify any damage (cracks, dust, discoloration) and suggest appropriate actions (clean, repair, replace).
- Energy Loss Prediction: Predict the percentage of energy loss due to dirt and damage using AI regression models. Display the trends in an interactive chart.
- Solar Panel Position Optimization: Use NASA solar data and your location to calculate the optimal tilt angle for your solar panel, maximizing energy gain.
- Dashboard: Display a dashboard with image upload, AI detection results, energy loss graph, position optimization form, AR placement preview and VR simulation trigger.
- AI Chatbot Support: Integrate a floating chatbot widget for instant support and FAQs related to solar panel maintenance and performance.

## Style Guidelines:

- Primary color: Bright yellow (#FFC107) for a solar-inspired theme.
- Secondary colors: Deep blue (#1976D2) and vibrant green (#4CAF50) to complement the yellow.
- Accent: Orange (#FFB300) for interactive elements and call-to-action buttons.
- Use glassmorphism effects for cards and panels to give a futuristic, eco-friendly feel.
- Incorporate subtle animations using Framer Motion for smooth transitions and hover effects.
- Employ a set of consistent, modern icons related to solar energy and AI.

## Original User Request:
Create a fully functional, stunning, and colorful modern web application for an AI-powered solar panel optimization platform using React.js for the frontend and FastAPI with MongoDB for the backend. The website should be highly interactive, visually appealing, and responsive, with a vibrant color palette featuring solar-inspired hues like bright yellows (#FFC107), deep blues (#1976D2), vibrant greens (#4CAF50), and gradient backgrounds. Use Tailwind CSS for styling, Framer Motion for smooth animations, and incorporate glassmorphism and 3D effects to give it a futuristic, eco-friendly vibe. Ensure accessibility and mobile responsiveness.

Frontend Pages & Sections
1. Landing Page / Home:

Hero Section: Bold headline like "Maximize Your Solar Power with AI!" with a dynamic, animated solar panel or AI scanning effect (use LottieFiles or SVG animations).
Feature Highlights: Colorful cards (yellow, blue, green) with icons and hover animations for:
Feature 1: Solar Panel Damage Detection - Upload an image to detect dust, cracks, discoloration.
Feature 2: Energy Loss Prediction - Show predicted percentage energy loss.
Feature 3: Solar Panel Position Optimization - Suggest ideal tilt using NASA data.
Feature 4: AR-based Solar Panel Placement - Scan roof with WebXR.
Feature 5: Virtual Reality Learning & Simulation - Learn efficiency in VR.
Historical Data Analysis (trends and insights).
AI Chatbot (ask questions like "Why is my panel underperforming?").
CTA Buttons: Vibrant "Try the Demo" and "Upload Image" buttons with gradient effects.
2. Features Page:

Detailed sections for each feature with illustrative icons and animated transitions:
Feature 1: Solar Panel Damage Detection: Form to upload an image, display results (e.g., "Dirt detected, clean now") with colorful alerts, using Computer Vision (CNNs) to detect dust, cracks, discoloration, and suggest clean, repair, or replace.
Feature 2: Energy Loss Prediction: Interactive chart (using Chart.js) showing loss trends, using historical data and AI regression models to estimate percentage energy loss due to dirt/damage, with cleaning schedules and maintenance tips.
Feature 3: Solar Panel Position Optimization: Input fields for latitude/longitude/tilt, show recommended tilt and energy gain, using NASA solar data and Google Maps API.
Feature 4: AR-based Solar Panel Placement: Integrate WebXR component with Three.js to scan the roof, calculate best placement based on sunlight angles and shadows, and place virtual solar panels.
Feature 5: Virtual Reality Learning & Simulation: Embed a VR demo link or 360° view with educational content on solar panel efficiency, tilt/shading/cleanliness effects, energy production, best placement, weather impact, and real-time energy loss simulations.
Historical Data: Display graphs of seasonal energy trends.
Chatbot: Floating widget (using React-Chatbot) for FAQs.
Use glassmorphism cards with hover effects and colorful borders.
3. AR/VR Experience Page:

Showcase an interactive AR demo using WebXR (roof scanning with sunlight angles).
Include a 3D-rendered VR simulation section with a "Enter VR Mode" button.
Add vibrant screenshots or video snippets with playful animations.
4. Dashboard / Demo Page:

User dashboard with:
Image upload section linked to /api/v1/upload-image (POST with FormData).
Real-time display of AI detection results (damage type, energy loss).
Graph of energy loss predictions using Chart.js.
Position optimization form linked to /api/v1/optimize-position (POST).
AR placement preview with WebXR.
VR simulation trigger.
Forecasted savings and energy gain with colorful badges.
Use a modern dashboard layout with gradient headers.
5. About Us / The Mission:

Story section with a tagline like "Empowering Sustainable Energy with AI".
Include team photos or avatars with vibrant frames.
Highlight impact stats (e.g., "Optimized 1000+ panels") with animated counters.
6. Contact / Support:

Contact form with colorful input fields.
Persistent AI chatbot popup for instant support (e.g., "How often should I clean?").
Social media icons with hover animations.
7. Footer:

Quick links in a rainbow gradient.
"Powered by TensorFlow, NASA API, MongoDB" in a stylish badge.
Copyright notice with a subtle glow effect.
Frontend Design & Tech Stack Suggestions:
Frontend: React.js + Tailwind CSS + Framer Motion + Chart.js + React-Chatbot + React-Toastify.
Animations: LottieFiles for hero animations, GSAP for scroll effects.
AR/VR: WebXR for AR, Three.js for 3D elements.
Fonts: Poppins or Roboto (bold and colorful sans-serif).
Color Palette: Bright yellow (#FFC107), deep blue (#1976D2), vibrant green (#4CAF50), with gradient backgrounds.
Design Style: Futuristic + Eco-friendly + Playful (glass UI, 3D cards, vibrant gradients, clean spacing).
Frontend Functionality Integration:
Connect to the backend API at http://127.0.0.1:8000/api/v1/:
Image Upload: Use axios to POST to /upload-image with FormData, display response (damage_type, energy_loss, action).
Position Optimization: POST to /optimize-position with latitude/longitude/tilt, show recommended_tilt and energy_gain.
AR Placement: Fetch placement data and render with WebXR/Three.js.
VR Simulation: Trigger VR mode with preloaded data.
Handle errors with colorful toast notifications (React-Toastify).
Ensure real-time updates with state management (Context API or Redux).
Backend Development
Build a fully functional FastAPI backend with MongoDB, including all APIs to support the frontend features. The backend should be structured as follows:



Database Setup (database.py):
Use MongoDB connection with environment variables.


API Endpoints (api/v1/endpoints.py):
/upload-image: Handle image uploads, detect damage, and store results.
/optimize-position: Process position data and return optimization results.
/ar-vr-simulation: Provide simulation data for AR/VR.
Main App (main.py):
Configure FastAPI with CORS for frontend integration.
Setup Instructions:
Create uploads/ directory in solar-backend/.
Run pip install -r requirements.txt after generating requirements.txt with the listed dependencies.
Start MongoDB and the FastAPI server with uvicorn app.main:app --reload.
Final Result:
The project should be a fully working application with a vibrant, engaging frontend and a robust backend. The website should blend a high-tech solar dashboard with a playful eco-app aesthetic, optimized for performance, and include a "Get Started" modal on load with a colorful welcome animation. Provide the complete React code (including components, styles, and API integration) and the full backend code, ready to run with npm start for the frontend and the FastAPI command for the backend.
  