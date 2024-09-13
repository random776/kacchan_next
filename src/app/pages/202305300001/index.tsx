import Header2 from "../../Basic/index2"
import SubMenu2 from "../../Basic/menuBar2";

export default function News() {
    return (
        <>
        <Header2 />
        <div className="sonota">
            <div><small className="topic">Twitter・広報</small></div>
            <div><small>掲載日：2023年5月30日</small></div>
            <h2 className="color3">ツイート一時停止のお知らせ</h2>
            <div><img className="img" src="https://pbs.twimg.com/media/FxQddcOacAEdbKM?format=jpg&name=medium" alt="" /></div>
            <p>5月29日（月）2:00 から6月2日（金）18:00 までの間、（緊急時を除き）一切のツイートを一時停止します。</p>
            <p>なお、<a href="https://github.com/random776">GitHub</a>は引き続き稼働します。</p>
    </div>
        <SubMenu2 />
        </>
    )
}