"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { PostRequest } from "../models/PostRequest";

export async function createPost(data: PostRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        error: "Non authentifié",
      };
    }

    const { book, comment, note } = data;

    // Validations
    if (!book?.title) {
      return {
        success: false,
        error: "Livre manquant",
      };
    }

    if (typeof note !== "number" || note < 1 || note > 5) {
      return {
        success: false,
        error: "Note invalide (doit être entre 1 et 5)",
      };
    }

    // Créer le post
    const post = await prisma.post.create({
      data: {
        title: book.title,
        image: book.thumbnail,
        content: comment,
        score: note,
        authorId: session.user.id,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    // Revalider la page d'accueil
    revalidatePath("/feed");

    return {
      success: true,
      post,
    };
  } catch (error) {
    console.error("Erreur createPost:", error);
    return {
      success: false,
      error: "Erreur lors de la création du post",
    };
  }
}
