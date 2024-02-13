import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account, trigger, session }) {
      console.log("token", token);
      console.log("user", user);
      return { ...token, ...user };
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
