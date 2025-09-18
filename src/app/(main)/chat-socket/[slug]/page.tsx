"use client";
import { useParams } from "next/navigation";

function ChatPage() {
  const params = useParams<{ slug: string }>();
  const userID = params.slug;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Chat với {userID}</h1>
      <div className="border p-2 rounded">
        Đây là đoạn chat realtime của {userID} (socket)
      </div>
    </div>
  );
}
export default ChatPage;
