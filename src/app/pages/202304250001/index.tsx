import Header2 from "../../Basic/index2"
import SubMenu2 from "../../Basic/menuBar2";

export default function News() {
    return (
        <>
        <Header2 />
        <div className="sonota">
            <div><small className="topic">Twitter・広報</small></div>
            <div><small>掲載日：2023年4月25日</small></div>
            <h2 className="color3">ツイート一時停止のお知らせ</h2>
            <div><img className="img" src="https://pbs.twimg.com/media/FuhNN-OaEAAKM-l?format=jpg&name=medium" alt="" /></div>
            <p>4月25日（火）から5月2日（火）の8日間、（緊急時を除き）一切のツイートを一時停止します。</p>
            <p>なお、<a href="https://www.instagram.com/kacchan_uts2_22/?igshid=YmMyMTA2M2Y%3D">インスタグラム</a>や<a href="https://github.com/random776">GitHub</a>は引き続き稼働します。</p>
    </div>
        <SubMenu2 />
        </>
    )
}