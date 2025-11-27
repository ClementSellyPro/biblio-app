import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import authConfig from "./auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Lors de la connexion Google, créer un name depuis le profil
      if (account?.provider === "google" && profile?.name) {
        const baseName = profile.name
          .toLowerCase()
          .replace(/\s+/g, "_")
          .replace(/[^a-z0-9_]/g, "");

        let name = baseName;
        let counter = 1;

        // Vérifier l'unicité
        while (await prisma.user.findUnique({ where: { name } })) {
          name = `${baseName}${counter}`;
          counter++;
        }

        // Si l'utilisateur existe déjà, mettre à jour le name
        if (user.email) {
          await prisma.user.update({
            where: { email: user.email },
            data: { name },
          });
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  ...authConfig,
});
