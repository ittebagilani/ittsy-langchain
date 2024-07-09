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

  if (!slug) {
    console.error("Missing file slug");
    return NextResponse.json({ detail: "Missing file slug" }, { status: 400 });
  }

  if (slug.includes("..") || path.isAbsolute(path.join(...slug))) {
    console.error("Invalid file path:", slug);
    return NextResponse.json({ detail: "Invalid file path" }, { status: 400 });
  }

  const [folder, ...pathToFile] = slug; // e.g., 'data', 'file.pdf'
  const allowedFolders = ["data", "tool-output"];

  if (!allowedFolders.includes(folder)) {
    console.error("No permission to access folder:", folder);
    return NextResponse.json({ detail: "No permission" }, { status: 400 });
  }

  try {
    // Construct the file path in the public directory
    const filePath = path.join(process.cwd(), 'public', folder, path.join(...pathToFile));
    const blob = await readFile(filePath);

    return new NextResponse(blob, {
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Length": blob.byteLength.toString(),
      },
    });
  } catch (error) {
    console.error("File not found or error reading file:", error);
    return NextResponse.json({ detail: "File not found" }, { status: 404 });
  }
}
