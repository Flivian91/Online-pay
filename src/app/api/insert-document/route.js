import { databases } from "@/lib/appwriteClient";
import { NextResponse } from "next/server";
// import { databases } from '@/lib/appwrite';
import { v4 as uuidv4 } from "uuid"; // For generating valid custom IDs

export async function POST(req) {
  try {
    const { databaseId, collectionId, data } = await req.json();

    if (!databaseId || !collectionId || !data) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Use a valid custom ID or let Appwrite auto-generate
    const documentId = uuidv4(); // Replace this with `null` if you prefer auto-generation

    const result = await databases.createDocument(
      databaseId,
      collectionId,
      documentId,
      data
    );

    return NextResponse.json({ document: result });
  } catch (error) {
    console.error(
      "Error inserting document:",
      JSON.stringify(error.response || error, null, 2)
    );
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
