"use client"

import Header from "../Basic/index"
import SubMenu from "../Basic/menuBar";
import '../styles/format.css'
import '../styles/style.css'
import '../styles/card.css'
import '../styles/notice.css'
import '../styles/news.css'


export default function Result() {
    return (
        <>
        <Header />
        <div className="sonota">
            <h2 className="color">連絡先（SNS）</h2>
            <p>
                お問い合わせはこちらから。本サイト掲載のWebアプリケーションに対するIssueやPull Requestは、以下のGitHubアカウントでいつでもお待ちしております。
            </p>
            <p>
                GitHubがよくわからないという人は、TwitterのDMなどでもご意見をお待ちしております。
            </p>
            <ul>
                <li><a href="https://github.com/random776">GitHub</a></li>
                <li><a href="https://twitter.com/kacchan_uts2_22">Twitter</a></li>
                <li><a href="https://www.instagram.com/kacchan_uts2_22/?igshid=YmMyMTA2M2Y%3D">インスタグラム</a></li>
                <li><a href="https://peing.net/ja/a758b75ef0fd2f">質問箱</a></li>
                <li><a href="https://www.threads.net/@kacchan_uts2_22">Threads</a></li>
            </ul>
            <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">ITC-LMSに載ってたこのお知らせの言葉遣いが好き <a href="https://t.co/c9Tw4CIflb">pic.twitter.com/c9Tw4CIflb</a></p>&mdash; かっちゃん (@kacchan_uts2_22) <a href="https://twitter.com/kacchan_uts2_22/status/1645205151005958144?ref_src=twsrc%5Etfw">April 9, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
        <SubMenu />
        </>
    )
}