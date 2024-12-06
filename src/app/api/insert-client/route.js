import { databases } from "@/lib/appwriteClient";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
export async function POST(req) {
  try {
    // Destructure the Request from the bosy
    const { databaseId, collectionId, data } = await req.json();
    console.log(data);
    // Condition to make sure the data is inserted correctly
    if (!databaseId || !collectionId || !data) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate the Custom Document ID
    const documentId = uuidv4();

    const result = await databases.createDocument(
      databaseId,
      collectionId,
      documentId,
      data
    );

    return NextResponse.json({ document: result }, { status: 201 });
  } catch (error) {
    console.error(
      "Error Inserting document: ",
      JSON.stringify(error.response || error, null, 2)
    );
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
