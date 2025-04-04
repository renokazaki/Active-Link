"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ActiveButton() {
  const [isActive, setIsActive] = useState(false);

  const handleToggleActivity = () => {
    setIsActive(!isActive);
    // TODO: ここでAPIを呼び出して活動状態を更新
  };
  return (
    <>
      <p className="mb-4">現在の状態: {isActive ? "活動中" : "休止中"}</p>
      <Button
        onClick={handleToggleActivity}
        className={isActive ? "bg-red-500" : "bg-green-500"}
      >
        {isActive ? "活動を終了" : "活動を開始"}
      </Button>
    </>
  );
}
