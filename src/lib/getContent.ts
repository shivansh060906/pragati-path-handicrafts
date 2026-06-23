import fs from "fs";
import path from "path";

export async function getContent(relativePath: string): Promise<string> {
    const fullPath = path.join(process.cwd(), "content", relativePath);
    return fs.readFileSync(fullPath, "utf-8");
}