import Header from "./Basic/index";
import SubMenu from "./Basic/menuBar";

import "./styles/format.css";
import "./styles/style.css";
import "./styles/card.css";
import "./styles/notice.css";
import "./styles/news.css";
import "./styles/scroll.css";

import UTAS from "./Basic/UTokyo";
import Base from "./Basic/hinode";

export default function Home() {
  return (
    <main>
      <Header />
      <div id="oshirase-viewer">
        <div className="slideshow">
          <div className="title">
            <p>本サイト</p>
            <p>関連情報</p>
          </div>
          <div className="slideContents">
            <section id="slide1">
              <div>
                <h3>
                  東京大学 150周年まで
                </h3>
                <p>
                  東大150周年まで、
                  <span></span>
                  <UTAS />
                  <span>日</span>
                  だそうです（2027年4月12日）が、誰も気にしない。  
                </p>
              </div>
            </section>
            <section id="slide2">
              <div>
                <Base />
              </div>
            </section>
            <section id="slide3">
              <div>
                <h3>基本平均点計算ツール</h3>
                <p>前期教養学部用基本平均点簡易計算ツールは<a className="btn4" href="/hakidame/kihon-heikin">こちら</a>。</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* <!-- ここから内容 --> */}
      <div className="sonota">
        <h2 className="color">このサイトの作成者について</h2>
        <p>
          このサイトは、 かっちゃん（
          <a className="btn4" href="https://x.com/kacchan_f90">
            @kacchan_f90
          </a>
          ） のプロフィールの延長として開設しているものです。
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
            Twitterのプロフ写真：
            <ul>
              <li>
                水戸駅北口側からの映像だが、筆者は別に水戸出身ではない。まあでも茨城と言ったら水戸である。
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
        <h2 className="color">最近の記事</h2>
        <ul>
          <li>
            2024年10月20日：{" "}
            <a className="btn4" href="./hakidame/gakusei-jichi">
              授業料値上げ報道に関する私見：なぜか喧嘩腰の「学生自治の再建」再考
            </a>
          </li>
          <li>
            2024年10月04日：{" "}
            <a className="btn4" href="https://kacchan-docs.vercel.app/">
              地球科学や物理・プログラミング関連のことはこちらに移転
            </a>
          </li>
          <li>
            2024年9月20日：{" "}
            <a className="btn4" href="./hakidame/gakuhi">
              授業料値上げ報道に関する私見：学生自治会の「対話」姿勢を問う
            </a>
          </li>
          <li>
            2024年9月19日：{" "}
            <a
              className="btn4"
              href="https://kacchan-docs.vercel.app/docs/physics/gogatsusai"
            >
              五月祭展示：シミュレーション科学の世界へようこそ
            </a>
          </li>
        </ul>
      </div>
      <SubMenu />
    </main>
  );
}
