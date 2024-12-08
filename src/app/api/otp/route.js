import { databases } from "@/lib/appwriteClient";
import { NextResponse } from "next/server";
import { Query } from "appwrite";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10); // Default to page 1
    const limit = parseInt(searchParams.get("limit") || "10", 10); // Default to 10 per page

    // Calculate offset for pagination
    const offset = (page - 1) * limit;

    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_OTP_COLLECTION_ID;

    // Query documents with limit and offset
    const result = await databases.listDocuments(databaseId, collectionId, [
      Query.limit(limit),
      Query.offset(offset),
      Query.orderDesc("$createdAt") // Optional: Sort by 'createdAt' in descending order (latest first)
    ]);

    // Calculate the total number of pages
    const totalPages = Math.ceil(result.total / limit);

    return NextResponse.json(
      { 
        otps: result.documents, 
        total: result.total, 
        page, 
        totalPages 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching OTPs:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
