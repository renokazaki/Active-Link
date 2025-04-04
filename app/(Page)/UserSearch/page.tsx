"use client";

import { useState } from "react";

type User = {
  id: string;
  name: string;
  isFriend: boolean;
};

export default function UserSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "佐藤一郎",
      isFriend: false,
    },
    {
      id: "2",
      name: "田中次郎",
      isFriend: true,
    },
  ]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // TODO: ここでAPIを呼び出してユーザーを検索
  };

  const handleAddFriend = (userId: string) => {
    // TODO: ここでAPIを呼び出して友達追加
    console.log("友達追加:", userId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">ユーザー検索</h1>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="ユーザー名で検索"
          className="w-full px-4 py-2 border rounded-lg mb-4"
        />
        <div className="grid gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
            >
              <span className="font-medium">{user.name}</span>
              {!user.isFriend && (
                <button
                  onClick={() => handleAddFriend(user.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  友達追加
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
