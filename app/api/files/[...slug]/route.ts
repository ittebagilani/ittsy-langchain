import { readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

const allowedFolders = ["data", "tool-output"];

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string[] } },
) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({ detail: "Missing file slug" }, { status: 400 });
  }

  const filePath = path.join(...slug);

  if (slug.includes("..") || path.isAbsolute(filePath)) {
    return NextResponse.json({ detail: "Invalid file path" }, { status: 400 });
  }

  const [folder, ...pathToFile] = slug;

  if (!allowedFolders.includes(folder)) {
    return NextResponse.json({ detail: "No permission" }, { status: 400 });
  }

  try {
    const fullPath = path.join(process.cwd(), folder, ...pathToFile);
    const blob = await readFile(fullPath);

    return new NextResponse(blob, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Length": blob.byteLength.toString(),
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ detail: "File not found" }, { status: 404 });
  }
}
