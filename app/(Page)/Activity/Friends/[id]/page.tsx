"use client";

import { useParams } from "next/navigation";

type FriendDetail = {
  id: string;
  name: string;
  status: "active" | "inactive";
  lastActive: string;
  bio: string;
  interests: string[];
};

// 仮のデータ
const friendDetails: Record<string, FriendDetail> = {
  "1": {
    id: "1",
    name: "山田太郎",
    status: "active",
    lastActive: "2分前",
    bio: "プログラミングが趣味です。",
    interests: ["TypeScript", "React", "Next.js"],
  },
  "2": {
    id: "2",
    name: "鈴木花子",
    status: "inactive",
    lastActive: "1時間前",
    bio: "デザインが好きです。",
    interests: ["UI/UX", "Figma", "Photoshop"],
  },
};

export default function FriendsInfo() {
  const params = useParams();
  const friendId = params.id as string;
  const friend = friendDetails[friendId];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">{friend.name}</h1>
            <div
              className={`w-3 h-3 rounded-full ${
                friend.status === "active" ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          </div>
          <p className="text-gray-500 mb-4">最終活動: {friend.lastActive}</p>
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">自己紹介</h2>
            <p>{friend.bio}</p>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">興味・関心</h2>
            <div className="flex flex-wrap gap-2">
              {friend.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
