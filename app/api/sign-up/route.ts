import { NextRequest, NextResponse } from "next/server";

// Dummy user DB (replace with real DB in production)
let users: { email: string; password: string }[] = [];

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json(
      { success: false, message: "Missing fields" },
      { status: 400 }
    );
  }
  if (users.find((u) => u.email === email)) {
    return NextResponse.json(
      { success: false, message: "User already exists" },
      { status: 409 }
    );
  }
  users.push({ email, password });
  // In production, hash password and return JWT or session cookie
  return NextResponse.json({ success: true, user: { email } });
}
