# 🌱 Social Hands
### A Community Service & Volunteer Event Platform

**Social Hands** is a community-driven event platform designed to connect people with meaningful social initiatives. It allows users to discover local community events, participate in volunteer activities, and organize initiatives that make a positive impact on society.

From donation campaigns and tree plantations to cleanup drives and educational programs, Social Hands makes it easier for communities to come together and create meaningful change.

## ✨ Features

- 🔎 **Discover Community Events:** Browse upcoming and recent social events with information such as event categories, dates, locations, and descriptions.
- 📍 **Explore Event Details:** Visit individual event pages to learn more about each initiative before participating.
- 📝 **Create Events:** Authenticated users can publish community initiatives by providing event titles, categories, dates, locations, images, and descriptions.
- 🛠️ **Manage Your Events:** Organizers can view, update, and delete the events they have created.
- 🤝 **Join & Leave Events:** Users can register for community events and manage their participation.
- 📅 **Joined Events:** Keep track of all the events a user has joined.
- 🔐 **User Authentication:** Sign up and sign in using email/password or Google OAuth.
- 📱 **Responsive Design:** Enjoy a seamless experience across desktop, tablet, and mobile devices.
- 🌍 **Community Highlights:** Explore featured events, community stories, and other engaging sections on the landing page.
- 📩 **Newsletter Interface:** A dedicated interface for newsletter subscriptions.

## 🧰 Tech Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript
- **Backend:** Node.js, Express 5
- **Database:** MongoDB with the official MongoDB Node.js Driver
- **Authentication:** Better Auth (Email/Password & Google OAuth)
- **API Security:** JWT Verification using jose and Remote JWKS
- **UI Components:** Base UI, shadcn/ui
- **Styling:** Tailwind CSS 4, class-variance-authority, tw-animate-css
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Environment Configuration:** dotenv
- **Deployment:** Vercel

## 🔐 Authentication & Security

Social Hands uses Better Auth for user authentication and secure session management.

- Email and password authentication.
- Google OAuth integration.
- Secure user session management.
- Protected API endpoints for authenticated operations.
- Bearer token verification using JWT.
- Remote JWKS endpoint integration for validating authentication tokens.

## ⚙️ Backend API Features

The Express.js backend provides RESTful API endpoints to support the platform's core functionality.

- Create community events through authenticated endpoints.
- Retrieve upcoming events sorted by event date.
- Fetch individual event details.
- Retrieve recently published events.
- Update and delete existing event records.
- Join and leave community events.
- Retrieve events joined by a specific user.
- Retrieve events managed by a specific organizer.

***Event records and participation data are stored separately in MongoDB to maintain better data organization.***

## 🌍 Deployment

The project uses Vercel for deployment.

- **Frontend:** Next.js application deployed on Vercel.
- **Backend:** Express.js REST API deployed as a serverless function on Vercel.
- **Database:** MongoDB Atlas for cloud database hosting.

## 🎯 Project Goal

Social Hands aims to encourage community participation by making social development initiatives more accessible. By bringing event organizers and volunteers together on a single platform, it helps turn small community efforts into meaningful collective impact.

---

**Built with ❤️ to connect communities and inspire positive change.** 🌱