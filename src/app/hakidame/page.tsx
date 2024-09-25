"use client";

import Header from "../Basic/index";
import SubMenu from "../Basic/menuBar";
import "../styles/format.css";
import "../styles/style.css";
import "../styles/card.css";
import "../styles/notice.css";
import "../styles/news.css";
import UTAS from "../Basic/UTokyo";

export default function Result() {
  return (
    <>
      <Header />
      <div className="sonota">
        <h2 className="color">掃き溜め</h2>
        <p>物理や雑多なことの掃き溜めを集めました。UIは後で改善します...</p>

        <h2 className="color2">物理関連</h2>
        <div className="card_style">
          {/* <!--  --> */}
          <div className="card_format">
            <div className="card card-skin">
              <div className="card__textbox">
                <div className="card__titletext">
                  地震波屈折法構造探査ツール（水平n層モデル）
                </div>
                <div className="card__overviewtext">
                  「地球惑星物理学観測実習」で計算に使用したものです。使い方は書いていないです。後で書きます。
                </div>
                <span className="card-url">
                  <a href="https://jishinha.vercel.app/" className="btn4">
                    ページを開く
                  </a>
                </span>
                <span className="card-url" style={{ left: "120px" }}>
                  <a
                    href="https://github.com/random776/jishinha/tree/master"
                    className="btn4"
                  >
                    ソースコードを見る
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* <!--  --> */}
          <div className="card_format">
            <div className="card card-skin">
              <div className="card__textbox">
                <div className="card__titletext">実験標準偏差計算ツール</div>
                <div className="card__overviewtext">
                  教養学部「基礎物理学実験」で用いたものです。
                </div>
                <span className="card-url">
                  <a href="https://standard-7j03.onrender.com" className="btn4">
                    ページを開く
                  </a>
                </span>
                <span className="card-url" style={{ left: "120px" }}>
                  <a
                    href="https://github.com/random776/standard"
                    className="btn4"
                  >
                    ソースコードを見る
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* <!--  --> */}
          <div className="card_format">
            <div className="card card-skin">
              <div className="card__textbox">
                <div className="card__titletext">
                  不確かさの伝播則計算ツール
                </div>
                <div className="card__overviewtext">
                  教養学部「基礎物理学実験」で用いたものです。
                </div>
                <span className="card-url">
                  <a
                    href="https://error-calculator.onrender.com"
                    className="btn4"
                  >
                    ページを開く
                  </a>
                </span>
                <span className="card-url" style={{ left: "120px" }}>
                  <a
                    href="https://github.com/random776/hutashikasa"
                    className="btn4"
                  >
                    ソースコードを見る
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* <!--  --> */}
          </div>

          <h2 className="color2">進学選択関連</h2>

          {/* <!--  --> */}
          <div className="card_style">
          <div className="card_format">
            <div className="card card-skin">
              <div className="card__textbox">
                <div className="card__titletext">基本平均点簡易計算ツール</div>
                <div className="card__overviewtext">
                  UTESなどが重いときにちょっとした計算をするのには役立つかもしれないです。近日中に改訂版を作るかもです。
                </div>
                <span className="card-url">
                  <a
                    href="./hakidame/kihon-heikin"
                    className="btn4"
                  >
                    ページを開く
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* <!--  --> */}
          <div className="card_format">
            <div className="card card-skin">
              <div className="card__textbox">
                <div className="card__titletext">基本平均点学習ツール</div>
                <div className="card__overviewtext">
                  基本平均点をよく知らない東大生が数式で学ぶ入門サイトです。
                </div>
                <span className="card-url">
                  <a
                    href="https://kihonheikin-practice.onrender.com"
                    className="btn4"
                  >
                    ページを開く
                  </a>
                </span>
                <span className="card-url" style={{ left: "120px" }}>
                  <a
                    href="https://github.com/random776/kihonheikin"
                    className="btn4"
                  >
                    ソースコードを見る
                  </a>
                </span>
              </div>
            </div>
          </div>
          </div>

          <h2 className="color2">その他雑多なこと</h2>
          {/* <!--  --> */}
          <div className="card_style">
          <div className="card_format">
            <div className="card card-skin">
              <div className="card__textbox">
                <div className="card__titletext">東大150年</div>
                <div className="card__overviewtext">
                  <div className="card__utokyo">
                    東大150周年まで、
                    <span></span>
                    <UTAS />
                    <span>日</span>
                    だそうです（2027年4月12日）が、
                    <a
                      className="btn4"
                      href="https://ansaikuropedia.org/wiki/%E8%AA%B0%E3%82%82%E6%B0%97%E3%81%AB%E3%81%97%E3%81%AA%E3%81%84"
                    >
                      誰も気
                    </a>
                    <a
                      className="btn4"
                      href="https://ansaikuropedia.org/wiki/%E8%AA%B0%E3%82%82%E6%B0%97%E3%81%AB%E3%81%97%E3%81%AA%E3%81%84"
                    >
                      にしない
                    </a>
                    。
                  </div>
                  <div className="card__utokyo"></div>
                </div>

                <span className="card-url">
                  <a
                    href="https://www.u-tokyo.ac.jp/ja/index.html"
                    className="btn4"
                  >
                    東大公式ページ
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* <!--  --> */}
          <div className="card_format">
            <div className="card card-skin">
              <div className="card__textbox">
                <div className="card__titletext">フラッシュ素因数分解ニキ</div>
                <div className="card__overviewtext">
                  全国の素因数分解ニキのためだけの、素因数分解の練習ができるツールです。「展開・因数分解」ツールと同じように、乱数生成により問題を作ります。
                </div>
                <span className="card-url">
                  <a href="https://soinsuuniki.onrender.com" className="btn4">
                    ページを開く
                  </a>
                </span>
                <span className="card-url" style={{ left: "120px" }}>
                  <a
                    href="https://github.com/random776/soinsuuniki"
                    className="btn4"
                  >
                    ソースコードを見る
                  </a>
                </span>
              </div>
            </div>
          </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__textbox">
              <div className="card__titletext">
                ナウルさんツイートクリエーター
              </div>
              <div className="card__overviewtext">
                ナウルさんの「一年のn％終了」ツイートを再現したはいいけれど、ひとさまのツイートを真似て何が楽しいのだろう？？
              </div>
              <span className="card-url">
                <a href="https://nauru-calendar.onrender.com" className="btn4">
                  ページを開く
                </a>
              </span>
              <span className="card-url" style={{ left: "120px" }}>
                <a
                  href="https://github.com/random776/nauru_calendar"
                  className="btn4"
                >
                  ソースコードを見る
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__textbox">
              <div className="card__titletext">
                かっちゃん旧版サイト
              </div>
              <div className="card__overviewtext">
                黒歴史の巣窟。閲覧注意。あの頃からはだいぶ僕も変わってしまった、とも思う。
              </div>
              <span className="card-url">
                <a href="https://random776.github.io/kacchan_home/" className="btn4">
                  ページを開く
                </a>
              </span>
              <span className="card-url" style={{ left: "120px" }}>
                <a
                  href="https://github.com/random776/kacchan_home"
                  className="btn4"
                >
                  ソースコードを見る
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__textbox">
              <div className="card__titletext">
              授業料値上げ案提出報道に関する私見
              </div>
              <div className="card__overviewtext">
              東京大学は学部生と大学院生の授業料を約10万円値上げする案を各部会に提出しました。その報道に関する管理者の私見です。
              </div>
              <span className="card-url">
                <a href="./hakidame/gakuhi" className="btn4">
                  ページを開く
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* ---- */}
      </div>
      </div>
      <SubMenu />
    </>
  );
}
