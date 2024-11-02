"use client";

import { useState, useEffect } from "react";
type timeProps = {
  year: number;
  month: number;
  date: number;
  hinodeHour: number;
  hinodeMinute: string;
  hinoiriHour: number;
  hinoiriMinute: string;
};

export default function Base() {
  const [time, setTime] = useState<timeProps>({
    year: 0,
    month: 0,
    date: 0,
    hinodeHour: 0,
    hinodeMinute: "",
    hinoiriHour: 0,
    hinoiriMinute: "",
  });

  const calculateTimes = () => {
    const now = new Date(); // 今の日時
    // now.setHours(now.getHours() + 9);
    const getYear = now.getFullYear();
    const target = new Date(`${getYear}/12/31 23:59:59`); // 今年の終わり
    const target2 = new Date(`${getYear}/1/1 0:00:00`); // 今年の始まり
    const remain_time = target.getTime() - now.getTime(); // 残り時間（ミリ秒で返る）
    const all_time = target.getTime() - target2.getTime(); // 年度全体の時間
    const percentage = (1 - remain_time / all_time) * 100;
    const n = 1; // 小数点第n位まで残す

    // 赤緯計算
    const float = Math.floor(percentage * Math.pow(10, n)) / Math.pow(10, n);
    const delta = -0.408 * Math.cos(2 * Math.PI * (float / 100 + 0.025));
    const cosh = (-1 / Math.tan(0.96)) * Math.tan(delta);
    const h = (2 * Math.acos(cosh) * 360) / (2 * Math.PI * 15);

    // 近時差に関する補正
    const x = 2 * Math.PI * (float / 100 - 81 / 365);
    const kinjisa =
      (9.87 * Math.sin(2 * x) - 7.53 * Math.cos(x) - 1.5 * Math.sin(x)) / 60;

    // 日の出・日の入り時刻
    const hinode = 12 - 1 / 3 - kinjisa - h / 2;
    const hinoiri = 12 - 1 / 3 - kinjisa + h / 2;

    // 時刻の計算結果をstateに保存
    setTime({
      year: getYear,
      month: now.getMonth() + 1,
      date: now.getDate(),
      hinodeHour: Math.trunc(hinode),
      hinodeMinute: ((hinode - Math.trunc(hinode)) * 60).toFixed(0),
      hinoiriHour: Math.trunc(hinoiri),
      hinoiriMinute: ((hinoiri - Math.trunc(hinoiri)) * 60).toFixed(0),
    });
  };

  useEffect(() => {
    calculateTimes(); // 初回実行
    const interval = setInterval(calculateTimes, 1000); // 20秒ごとに実行

    return () => clearInterval(interval); // コンポーネントがアンマウントされたときにクリーンアップ
  }, []);

  return (
    <>
      <h3>
        きょうは{time.year}年{time.month}月{time.date}日
      </h3>
      <p>{}</p>
      <p>
        日の出：<span className="card__utokyo__day">{time.hinodeHour}</span> 時{" "}
        <span className="card__utokyo__day">{time.hinodeMinute}</span>{" "}
        分　日の入り：
        <span className="card__utokyo__day">{time.hinoiriHour}</span> 時{" "}
        <span className="card__utokyo__day">{time.hinoiriMinute}</span> 分
        （東京、あくまで概算値）
      </p>
    </>
  );
}
