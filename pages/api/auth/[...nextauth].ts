import NextAuth, {AuthOptions} from "next-auth"
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const authOptions: AuthOptions = ({
  adapter: PrismaAdapter(prisma),

  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      // console.log("user: ", user, "account: ", account, "profile: ", account, "email: ", email, "credentials: ", credentials)
      if (user.status === "BLOQUEADO") return false;
      return true;
    },
    async session({ session, user, token }) {
      // console.log("session: ", session, "user: ", user, "token: ", token);
      const session2 = { ...session, user };
      return session2;
    }
  },
  providers: [
    Auth0Provider({
        clientId: process.env.AUTH0_CLIENT_ID!,
        clientSecret: process.env.AUTH0_CLIENT_SECRET!,
        issuer: process.env.AUTH0_ISSUER,
      })
  ],
  secret: process.env.SECRET
})

const authHandler = NextAuth(authOptions);
export default async function handler(...params: any[]) {
  await authHandler(...params);
}