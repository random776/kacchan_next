const now = new Date(); // 今の日時
now.setHours(now.getHours() + 9);
const getYear = now.getFullYear();
const target = new Date(`${getYear}/12/31 23:59:59`); // 今年の終わり
const target2 = new Date(`${getYear}/1/1 0:00:00`); // 今年の始まり
const remain_time = target.getTime() - now.getTime(); // 残り時間（ミリ秒で返る）
const all_time = target.getTime() - target2.getTime(); // 年度全体の時間
const percentage = (1 - remain_time / all_time) * 100;
console.log(percentage);
const n = 1; // 小数点第n位まで残す

const float = Math.floor(percentage * Math.pow(10, n)) / Math.pow(10, n);
export default function Base() {
  return (
    <>
      <h3>
        きょうは{getYear}年{now.getMonth() + 1}月{now.getDate()}日
      </h3>
      <p>
        {getYear}年の <span className="card__utokyo__day">{float}</span> ％が終わりましたが、まだ大丈夫ですよね。
      </p>
    </>
  );
}
