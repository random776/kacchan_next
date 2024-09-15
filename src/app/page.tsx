import Header from "./Basic/index";
import SubMenu from "./Basic/menuBar";
import UTAS from "./Basic/UTokyo";

import "./styles/format.css";
import "./styles/style.css";
import "./styles/card.css";
import "./styles/notice.css";
import "./styles/news.css";
import "./styles/scroll.css";

export default function Home() {
  return (
    <main>
      <Header />
      <div id="oshirase-viewer">
        <div className="scroll_box">
          <div className="scroll_wrap">
            <div className="scroll_track">
              <span className="scroll_cont">
                <span style={{ color: "blue" }}>
                  ★本サイト 仕様変更のお知らせ★
                </span>
                本サイトはこれまでViteで動かしていましたが、フレームワークを
                <span style={{ color: "blue" }}>Next.js</span>
                に変更しました。（2024年9月14日）
              </span>
              <span className="scroll_cont">
                <span style={{ color: "blue" }}>
                  ★本サイト 名称変更のお知らせ★
                </span>
                「
                <span style={{ color: "red" }}>
                  地物学科かっちゃんの物理と雑多なことの掃き溜め
                </span>
                」に改称しました。（2024年9月16日）
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ここから内容 --> */}
      <div className="sonota">
        <h2 className="color">このサイトの作成者について</h2>
        <p>
          このサイトは、
          かっちゃん（
          <a className="btn4" href="https://x.com/kacchan_f90">
            @kacchan_f90
          </a>
          ）
          のプロフィールの延長として開設しているものです。
        </p>
        <ul>
          <li>
            所属： 東京大学理学部{" "}
            <a
              className="btn4"
              href="https://www.eps.s.u-tokyo.ac.jp/undergraduate/epp/"
            >
              地球惑星物理学科
            </a>
            （3年）
          </li>
          <li>
            過去の所属：茨城のどこかの公立小中 → どこかの公立高校 →
            どこかの予備校（1浪）→ 教養学部理科2類
          </li>
          <li>
            学科でやりたいこと：
            <ul>
              <li>
                まだ決まってない。宇宙プラズマや固体地球の分野が面白く感じている。
              </li>
            </ul>
          </li>
          <li>
            最近読んでいる本：
            <ul>
              <li>柴田 一成ほか (2023). 宇宙電磁流体力学の基礎. 日本評論社.</li>
              <li>近藤 豊ほか (2024). 雲の物理とエアロゾル. 東京大学出版会.</li>
            </ul>
          </li>
          <li>
            所属サークル：
            <ul>
              <li>なかよしさいくる（自転車サークル）</li>
              <li>ut.code(); （Web系プログラミングサークル）</li>
            </ul>
          </li>
          <li>
            GitHubアカウント：{" "}
            <a className="btn4" href="https://github.com/random776">
              こちら
            </a>
          </li>
          <li>
            Twitterのアイコン：
            <ul>
              <li>
                「いずちゃん」という名前が一応ついている。伊豆旅行の際によく晴れるようにと願って描いたものだが、何かが違う気がする。
              </li>
            </ul>
          </li>
        </ul>
        <blockquote className="twitter-tweet">
          <p lang="ja" dir="ltr">
            峠越え！(石北峠、1050m){" "}
            <a href="https://t.co/XKv0rAXqEk">pic.twitter.com/XKv0rAXqEk</a>
          </p>
          &mdash; かっちゃん (@kacchan_f90){" "}
          <a href="https://twitter.com/kacchan_f90/status/1831594883855106259?ref_src=twsrc%5Etfw">
            September 5, 2024
          </a>
        </blockquote>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>
      <SubMenu />
    </main>
  );
}
