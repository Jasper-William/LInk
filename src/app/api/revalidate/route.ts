import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = new URL(request.url).searchParams.get("secret");
  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) return NextResponse.json({ message: "无权执行。" }, { status: 401 });
  revalidatePath("/", "layout");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
