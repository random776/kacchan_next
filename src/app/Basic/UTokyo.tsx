/* eslint-disable react-refresh/only-export-components */
export default function UTAS() {
        const now = new Date(); //今の日時
        const target = new Date("2027/4/12 0:00:00");
        const remain_time = target.getTime() - now.getTime(); //差分を取る（ミリ秒で返ってくる）
        if (remain_time < 0) {
          return false;
        }
        const difDay = Math.floor(remain_time / 1000 / 60 / 60 / 24);
    return (
        <span className="card__utokyo__day">{difDay}</span>
    )
}