import axiosClient from "@/lib/axiosClient";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any, req) {
        console.log("credentials", credentials);

        return {
          ...credentials,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {

      try {
        if (account?.provider == "google") {
          const payload: any = {
            id: user.id,
            nama: user.name,
            avatar: user.image,
            id_token: account?.id_token,
          };
          
          // await axiosClient.post("/auth/logingoogle", payload);
          // console.log("payload", payload);
          
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account, trigger, session }) {
      console.log("token", token);
      console.log("user", user);
      return { ...token, ...user, ...account };
    },
    async session({ session, user, token }) {
      // console.log("session", session);
      // console.log("user", user);
      // console.log("token", token);
      // console.log("role", session.user.role);

      session.user.id = Number(token.id);
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.role = token.role;

      return session;
    },
  },
};

export default NextAuth(authOptions);
