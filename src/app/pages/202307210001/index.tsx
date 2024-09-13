import Header2 from "../../Basic/index2"
import SubMenu2 from "../../Basic/menuBar2";

export default function News() {
    return (
        <>
        <Header2 />
        <div className="sonota">
            <div><small className="topic">Twitter・広報</small></div>
            <div><small>掲載日：2023年7月21日</small></div>
            <h2 className="color3">ツイート一時停止のお知らせ</h2>
            <div><img className="img2" src="https://github.com/random776/kacchan-uts2-22/blob/master/pictures/saboro.jpg?raw=true" alt="" /></div>
            <p>テスト期間中につき、以下の日程にて（緊急時を除き）一切のツイートを一時停止し、ログアウトします。</p>
            <p>なお、<a href="https://github.com/random776">GitHub</a>は引き続き稼働します。</p>
            <h2 className="color2">第3回ツイート一時停止期間</h2>
            <ul>
                <li>
                2023年 7/19（水）〜 7/25（火）
                </li>
                <li>
                2023年 7/29（土）〜 8/1（火） ※ 予定
                </li>
            </ul>
    </div>
        <SubMenu2 />
        </>
    )
}