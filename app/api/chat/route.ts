import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Chat from '@/models/Chat';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const { receiverId, message } = await req.json();

    const chat = await Chat.create({
      sender: session.user.id,
      receiver: receiverId,
      message
    });

    return NextResponse.json(chat);
  } catch (error) {
    return NextResponse.json({ error: 'Error sending message' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const url = new URL(req.url);
    const receiverId = url.searchParams.get('receiverId');

    const messages = await Chat.find({
      $or: [
        { sender: session.user.id, receiver: receiverId },
        { sender: receiverId, receiver: session.user.id }
      ]
    }).sort({ timestamp: 1 });

    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching messages' }, { status: 500 });
  }
} 