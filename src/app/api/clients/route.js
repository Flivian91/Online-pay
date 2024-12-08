import { databases } from "@/lib/appwriteClient";
import { Query } from "appwrite"; // Import the Query module
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  try {
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_CLIENT_COLLECTION_ID;

    const offset = (page - 1) * limit; // Calculate the offset for pagination

    // Fetch paginated documents using Appwrite queries
    const response = await databases.listDocuments(databaseId, collectionId, [
      Query.limit(limit),
      Query.offset(offset),
      Query.orderDesc("createdAt"), // Order by createdAt in descending order
    ]);

    return NextResponse.json({
      clients: response.documents,
      total: response.total,
      page,
      totalPages: Math.ceil(response.total / limit),
      currentItemOffset: offset,
    });
  } catch (error) {
    console.error("Error fetching paginated clients:", error);
    return NextResponse.json(
      { error: "Failed to fetch clients data" },
      { status: 500 }
    );
  }
}
