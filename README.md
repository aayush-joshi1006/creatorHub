#### CreatorHub

---

### Introduction

CreatorHub is a crowdfunding platform designed for creators. It allows users to support creators by making payments, leaving personalized messages, and viewing top supporters. The platform leverages Razorpay for payment processing and includes features for user profile management, session handling, and secure data updates.

### Features
- User Authentication: Login and session management using NextAuth.js.
- User Dashboard: View and update user profiles, including profile pictures and Razorpay credentials.
- Crowdfunding:
  - Make payments to creators with customizable amounts and messages.
  - Display the top supporters for each creator.
- Dynamic User Pages: Each user has a unique page showcasing their profile, total payments received, and top supporters.
- Payment Integration: Secure payment processing with Razorpay.
- Responsive Design: Built with Tailwind CSS for seamless mobile and desktop experiences.
- Interactive Navbar: Dropdown menu with smooth hover effects.

### Tech Stack
- Frontend: Next.js, React, Tailwind CSS
- Backend: Node.js (APIs for fetching and updating user/payment data)
- Authentication: NextAuth.js
- Payment Gateway: Razorpay
- Toast Notifications: React-Toastify for user-friendly feedback

### Installation

## Prerequisites
- Node.js installed
- Razorpay account for payment gateway integration

## Steps to Install and Run
1. Clone the repository:

```
git clone https://github.com/your-username/creatorhub.git  
cd creatorhub
```

2. Install dependencies:

```
npm install  
```

3. Set up environment variables:

Create a .env file in the root directory and add the following:

```
NEXTAUTH_URL=http://localhost:3000  
NEXTAUTH_SECRET=your_nextauth_secret  
RAZORPAY_KEY_ID=your_razorpay_key  
RAZORPAY_KEY_SECRET=your_razorpay_secret  
```

4. Run the development server:

```
npm run dev  
```

The app will be available at http://localhost:3000.

## Folder Structure

```plaintext
├── actions             # API call and data-fetching logic  
├── components          # Reusable React components  
├── pages               # Next.js page routes  
├── public              # Static assets like images  
├── styles              # Global and component-specific styles  
├── .env                # Environment variables (not in version control)  
├── README.md           # Documentation  
```

### Usage
## Local Development
1. Log in via the /login page to access the dashboard.
2. Update your profile, including Razorpay credentials, from the dashboard.
3. Navigate to /username to view or contribute to a creator’s page.

## Live Deployment
Ensure the environment variables are properly configured for the production environment. Use a service like Vercel or Netlify for hosting.

## Contribution
Contributions are welcome! Please open an issue or submit a pull request if you'd like to add features or fix bugs.

---

Project Link
Check out the live project here. https://creator-hub-one.vercel.app/