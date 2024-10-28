import { readdir, readFile, statSync } from "fs";
import { join, extname } from "path";
import { promisify } from "util";
import mime from "mime-types";
import { NextResponse } from "next/server";
import matter from "gray-matter";

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);

export interface BlogPostMetadata {
  title: string;
  description: string;
  pubDate: string;
  category: string;
  slug: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
}

export interface File {
  name: string;
  path: string;
  directUrl: string;
  size: number;
  mimeType: string;
  lastModified: Date;
  extension: string;
  isDirectory: boolean;
  relativePath: string;
  metadata: BlogPostMetadata;
}

async function getFilesRecursively(
  dir: string,
  baseDir: string = dir
): Promise<BlogPostMetadata[]> {
  const items = await readdirAsync(dir);
  const files = [];

  for (const item of items) {
    const fullPath = join(dir, item);
    // const stats = statSync(fullPath);
    // const relativePath = fullPath.replace(baseDir, "").replace(/^[/\\]/, "");

    const fileContent = await readFileAsync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);

    files.push({
      // THE FOLLOWING CODE IS COMMENTED EXCESS DATA IN RESPONSE
      // name: item,
      // path: `/api/files/${relativePath}`,
      // directUrl: `/${relativePath}`,
      // size: stats.size,
      // mimeType: mime.lookup(fullPath) || "application/octet-stream",
      // lastModified: stats.mtime,
      // extension: extname(item).toLowerCase(),
      // isDirectory: false,
      // relativePath,
      ...(data as BlogPostMetadata),
    });
  }

  return files;
}

export async function GET() {
  try {
    const publicDir = join(process.cwd(), "public/staticFiles");
    const files = await getFilesRecursively(publicDir);

    return NextResponse.json({
      total: files.length,
      files: files,
    });
  } catch (error) {
    console.error("Error reading directory:", error);
    return NextResponse.json({ error: "Error reading files" }, { status: 500 });
  }
}
