"use client"

import Header2 from "../../Basic/index2"
import SubMenu2 from "../../Basic/menuBar2";

import "../styles/format.css";
import "../styles/style.css";
import "../styles/card.css";
import "../styles/notice.css";
import "../styles/news.css";
import "../styles/scroll.css";

export default function News() {
    return (
        <>
        <Header2 />
        <div className="sonota">
            <div><small className="topic">Twitter・広報</small></div>
            <div><small>掲載日：2023年5月28日</small></div>
            <h2 className="color3">500フォロワーさま達成</h2>
            <p>本日、本サイトの管理者である「かっちゃん」のTwitterのフォロワーさまが500人を達成いたしました。</p>
            <img src="500nin.jpeg" alt="" className="img" />
            <p>今後とも「かっちゃん」へのご愛顧のほどよろしくお願いいたします。</p>
            
    </div>
        <SubMenu2 />
        </>
    )
}