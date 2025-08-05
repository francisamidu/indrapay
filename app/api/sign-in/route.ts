import { NextRequest, NextResponse } from 'next/server';

// Dummy user DB (replace with real DB in production)
const users = [
  { email: 'test@example.com', password: 'password123', name: 'Test User' },
];

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    // In production, return JWT or session cookie
    return NextResponse.json({ success: true, user: { email: user.email, name: user.name } });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}
