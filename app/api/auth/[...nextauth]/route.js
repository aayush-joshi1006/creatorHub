// import mongoose from "mongoose";
// import NextAuth from "next-auth";
// // import AppleProvider from 'next-auth/providers/apple'
// // import FacebookProvider from 'next-auth/providers/facebook'
// // import GoogleProvider from 'next-auth/providers/google'
// // import EmailProvider from 'next-auth/providers/email'
// import GitHubProvider from "next-auth/providers/github";
// import User from "@/app/models/User";
// import Payment from "@/app/models/Payment";
// import connectDB from "@/app/db/connectDb";

// export const authoptions = NextAuth({
//   providers: [
//     // OAuth authentication providers...
//     // AppleProvider({
//     //   clientId: process.env.APPLE_ID,
//     //   clientSecret: process.env.APPLE_SECRET
//     // }),
//     // FacebookProvider({
//     //   clientId: process.env.FACEBOOK_ID,
//     //   clientSecret: process.env.FACEBOOK_SECRET
//     // }),
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_ID,
//     //   clientSecret: process.env.GOOGLE_SECRET
//     // }),
//     // // Passwordless / email sign in
//     // EmailProvider({
//     //   server: process.env.MAIL_SERVER,
//     //   from: 'NextAuth.js <no-reply@example.com>'
//     // }),
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account, profile, credentials }) {
//       if (account.provider == "github") {
//         // const client =await mongoose.connect("mongodb://localhost:27017/creatorhub")
//         await connectDB();

//         const email = user.email || profile?.email;

//         if (!email) {
//           console.error("Email not available during GitHub authentication");
//           return false;
//         }

//         const currentUser = await User.findOne({ email: email });
//         if (!currentUser) {
//           const newUser = new User({
//             email: email,
//             username: email.split("@")[0],
//           });
//           await newUser.save();
//           // user.name= newUser.username
//         }
//         // else{
//         //   user.name=currentUser.username
//         // }
//         return true;
//       }
//     },
//     async session({ session, user, token }) {
//       const dbUser = await User.findOne({ email: session.user.email });
//       // session.user.name = dbUser.username
//       session.user.name = dbUser?.username || session.user.name;
//       return session;
//     },
//   },
// });

// export { authoptions as GET, authoptions as POST };


import mongoose from "mongoose";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/app/models/User";
import connectDB from "@/app/db/connectDb";

// Ensure database connection is established at startup
connectDB();

export const authoptions = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        if (account.provider === "github") {
          const email = user.email || profile?.email;
          if (!email) {
            console.error("Email not available during GitHub authentication");
            return false;
          }

          const currentUser = await User.findOne({ email });
          if (!currentUser) {
            const newUser = new User({
              email,
              username: email.split("@")[0],
            });
            await newUser.save();
          }
          return true;
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
    async session({ session, token }) {
      try {
        const dbUser = await User.findOne({ email: session.user.email });
        session.user.name = dbUser?.username || session.user.name;
      } catch (error) {
        console.error("Error during session callback:", error);
      }
      return session;
    },
  },
});

export { authoptions as GET, authoptions as POST };
