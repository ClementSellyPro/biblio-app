import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    console.log("Session: ", session);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const body = await request.json();
    console.log("Body reçu:", body);

    const { book, comment, note, authorId } = body;

    if (!book) {
      return NextResponse.json({ error: "Livre manquant" }, { status: 400 });
    }

    if (!comment || !note) {
      return NextResponse.json(
        { error: "Commentaire ou note manquant" },
        { status: 400 }
      );
    }

    if (!authorId) {
      return NextResponse.json(
        { error: "Utilisateur non authentifié" },
        { status: 401 }
      );
    }

    if (typeof note !== "number" || note < 1 || note > 5) {
      return NextResponse.json(
        { error: "Note invalide (doit être entre 1 et 5)" },
        { status: 400 }
      );
    }

    // Create post
    const post = await prisma.post.create({
      data: {
        title: book.title,
        image: book.thumbnail ?? null,
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

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("POST /api/posts error:", error);

    return NextResponse.json(
      { error: "Erreur lors de la création du post" },
      { status: 500 }
    );
  }
}
