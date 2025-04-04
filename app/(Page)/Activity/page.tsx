"use client";

import { useState } from "react";
import Link from "next/link";

type Friend = {
  id: string;
  name: string;
  status: "active" | "inactive";
  lastActive: string;
};

export default function Activity() {
  //const [friends,setFriends] = useState<Friend[]>([

  const [friends] = useState<Friend[]>([
    {
      id: "1",
      name: "山田太郎",
      status: "active",
      lastActive: "2分前",
    },
    {
      id: "2",
      name: "鈴木花子",
      status: "inactive",
      lastActive: "1時間前",
    },
    // {
    //   id: "3",
    //   name: "山田太郎",
    //   status: "active",
    //   lastActive: "2分前",
    // },
    // {
    //   id: "4",
    //   name: "鈴木花子",
    //   status: "inactive",
    //   lastActive: "1時間前",
    // },
    // {
    //   id: "5",
    //   name: "山田太郎",
    //   status: "active",
    //   lastActive: "2分前",
    // },
    // {
    //   id: "6",
    //   name: "鈴木花子",
    //   status: "inactive",
    //   lastActive: "1時間前",
    // },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">友達一覧</h1>
      <div className="grid gap-4">
        {friends.map((friend) => (
          <Link
            key={friend.id}
            href={`/Activity/Friends/${friend.id}`}
            className="block"
          >
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div>
                <h3 className="font-medium">{friend.name}</h3>
                <p className="text-sm text-gray-500">
                  {friend.status === "active" ? (
                    <span>活動中</span>
                  ) : (
                    <span>最終活動: {friend.lastActive}</span>
                  )}
                </p>
              </div>
              <div
                className={`w-3 h-3 rounded-full ${
                  friend.status === "active" ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
