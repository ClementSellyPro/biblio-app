import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

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

    // Create post
    const post = await prisma.post.create({
      data: {
        title: book.title,
        image: book.thumbnail ?? null,
        content: comment,
        score: note,
        authorId,
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
