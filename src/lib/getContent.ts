import { createClient } from "@/lib/supabase/server";

export async function getContent(page: string): Promise<string> {
    const supabase = await createClient();

    console.log("Fetching content for page:", page);
    console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

    const { data, error } = await supabase
        .from("page_content")
        .select("content")
        .eq("page", page)
        .single();

    console.log("Data:", data);
    console.log("Error:", error);

    if (error || !data) return "_Content not found._";
    return data.content;
}