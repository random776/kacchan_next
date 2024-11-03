"use client";

import { useState, useEffect } from "react";
type timeProps = {
  remain_time: number;
};

export default function UTAS() {
  const [time, setTime] = useState<timeProps>({
    remain_time: 0,
  });
  const calculateTimes = () => {
    const now = new Date(); //今の日時
    now.setHours(now.getHours() + 9);
    const target = new Date("2027/4/12 0:00:00");
    const remain_time = target.getTime() - now.getTime(); //差分を取る（ミリ秒で返ってくる）
    if (remain_time < 0) {
      return false;
    }
    setTime({
      remain_time: remain_time,
    });
  };

  useEffect(() => {
    calculateTimes(); // 初回実行
    const interval = setInterval(calculateTimes, 5000); // 20秒ごとに実行

    return () => clearInterval(interval); // コンポーネントがアンマウントされたときにクリーンアップ
  }, []);

  return (
    <span className="card__utokyo__day">
      {Math.floor(time.remain_time / 1000 / 60 / 60 / 24)}
    </span>
  );
}
