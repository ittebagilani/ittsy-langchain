import { readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

/**
 * This API is to get file data from allowed folders.
 * It receives a path slug and responds with file data, similar to serving a static file.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string[] } },
) {
  const slug = params.slug;

  // Check if the slug is provided
  if (!slug) {
    return NextResponse.json({ detail: "Missing file slug" }, { status: 400 });
  }

  // Validate the path to prevent directory traversal
  if (slug.includes("..") || path.isAbsolute(path.join(...slug))) {
    return NextResponse.json({ detail: "Invalid file path" }, { status: 400 });
  }

  const [folder, ...pathToFile] = params.slug; // e.g., 'data', 'file.pdf'
  const allowedFolders = ["data", "tool-output"];

  // Check if the folder is allowed
  if (!allowedFolders.includes(folder)) {
    return NextResponse.json({ detail: "No permission" }, { status: 400 });
  }

  try {
    // Construct the file path
    const filePath = path.join(process.cwd(), folder, path.join(...pathToFile));
    const blob = await readFile(filePath);

    // Return the file content
    return new NextResponse(blob, {
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Length": blob.byteLength.toString(),
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ detail: "File not found" }, { status: 404 });
  }
}
