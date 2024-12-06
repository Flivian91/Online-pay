import { databases } from "@/lib/appwriteClient";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_CLIENT_COLLECTION_ID;

    const result = await databases.listDocuments(databaseId, collectionId);
    return NextResponse.json({ clients: result.documents }, { status: 200 });
  } catch (error) {
    console.error("Error fetching Clients Information", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
