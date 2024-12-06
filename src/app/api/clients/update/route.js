import { databases } from "@/lib/appwriteClient";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    // Get the data sent in the request body
    const { documentId, status } = await req.json();

    if (!documentId || !status) {
      return NextResponse.json(
        { error: "Missing documentId or status" },
        { status: 400 }
      );
    }

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_CLIENT_COLLECTION_ID;

    // Update the document's status field
    const updatedDocument = await databases.updateDocument(
      databaseId,
      collectionId,
      documentId,
      { status }
    );

    return NextResponse.json(
      { message: "OTP status updated successfully", document: updatedDocument },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating OTP status:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
