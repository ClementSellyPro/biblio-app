"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getCurrentUserProfile() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return { success: false, error: "Non authentifié" };
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        posts: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
            _count: {
              select: {
                likes: true,
                comments: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        _count: {
          select: {
            posts: true,
            followers: true,
            following: true,
            likedPosts: true,
          },
        },
      },
    });

    if (!user) {
      return { success: false, error: "Utilisateur non trouvé" };
    }

    return { success: true, user };
  } catch (error) {
    console.error("Erreur getCurrentUserProfile:", error);
    return { success: false, error: "Erreur serveur" };
  }
}

export async function updateUserProfile(data: {
  name?: string;
  bio?: string;
  status?: string;
}) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return { success: false, error: "Non authentifié" };
    }

    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name: data.name,
        bio: data.bio,
        status: data.status,
      },
    });

    revalidatePath("/profile");
    return { success: true, user };
  } catch (error) {
    console.error("Erreur updateUserProfile:", error);
    return { success: false, error: "Erreur serveur" };
  }
}
