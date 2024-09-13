import Header2 from "../../Basic/index2"
import SubMenu2 from "../../Basic/menuBar2";

export default function News() {
    return (
        <>
        <Header2 />
        <div className="sonota">
            <div><small className="topic">Web開発</small></div>
            <div><small>掲載日：2023年6月28日</small></div>
            <h2 className="color3">本サイトの仕様変更のお知らせ</h2>
            <p>本サイトの仕様を生HTMLファイルからReactに変更しました。</p>
            <p>これにより、サイト全体のデザイン変更にかかる手間が大幅に軽減されます。</p>
            <p>「サイトの内容が何も変更されていないではないか」とおっしゃる方もいるかもしれませんが、なんだかんだで大変だったんですよ、もっと褒めて...</p>
            <p>ソースコードは<a className="btn4" href="https://github.com/random776/kacchan_home">こちら</a>から。</p>
    </div>
        <SubMenu2 />
        </>
    )
}