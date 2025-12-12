import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const maxResults = searchParams.get("maxResults") || "10";

  if (!query) {
    return NextResponse.json({ error: "Requete vide." }, { status: 400 });
  }

  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      query
    )}&maxResults=${maxResults}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erreur Google Books API");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Google Books API erreur:", error);
    return NextResponse.json(
      { error: "Erreur pour obtenir les livres" },
      { status: 500 }
    );
  }
}
