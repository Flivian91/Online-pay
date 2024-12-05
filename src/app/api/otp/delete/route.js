import { databases } from "@/lib/appwriteClient";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const { documentId } = await req.json();

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_OTP_COLLECTION_ID;

    await databases.deleteDocument(databaseId, collectionId, documentId);

    return NextResponse.json(
      { message: "OTP deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting OTP:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
