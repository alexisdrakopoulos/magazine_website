import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "../../../components/send_email"

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { email } = data;

  try {
    await sendEmail(email, `This is a submission email from Next.js! Data: ${JSON.stringify(data, null, 2)}`);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}