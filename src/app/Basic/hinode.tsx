const now = new Date(); //今の日時
const getYear = now.getFullYear();
const target = new Date(`${getYear + 1}/1/1 0:00:00`);
const target2 = new Date(`${getYear}/1/1 0:00:00`);
const remain_time = target.getTime() - now.getTime(); //差分を取る（ミリ秒で返ってくる）
const all_time = target.getTime() - target2.getTime();
const percentage = (1 - remain_time / all_time) * 100;
console.log(percentage);
const n = 1; // 小数点第n位まで残す

const float = Math.floor(percentage * Math.pow(10, n)) / Math.pow(10, n);
export default function Base() {
  return (
    <>
      <p>
        <strong>きょうは{getYear}年{now.getMonth() + 1}月{now.getDate()}日</strong>
      </p>
      <p>
        {getYear}年の <span className="card__utokyo__day">{float}</span> ％が終わりましたが、まだ大丈夫ですよね。
      </p>
    </>
  );
}