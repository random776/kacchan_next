import Header from "./Basic/index";
import SubMenu from "./Basic/menuBar";
import Image from "next/image";
import UTAS from "./Basic/UTokyo";

import './styles/format.css'
import './styles/style.css'
import './styles/card.css'
import './styles/notice.css'
import './styles/news.css'

export default function Home() {
    return (
        <main>
        <Header />
        <div id="oshirase-viewer">
      <div id="oshirase">
        <h2 className="color4">NOTICES</h2>
        {/* <!--  --> */}
        <hr className="hr"/>
        <div className="page_update">
          <span className="date">2023年12月06日</span>
          <span>
            <a href="./news/202312060001"
              >本サイトのスライド写真を変更しました。</a
            >
          </span>
        </div>
        {/* <!--  --> */}
        <hr className="hr" />
        <div className="page_update">
          <span className="date">2023年7月21日</span>
          <span>
            <a href="./news/202307210001"
              >ツイート一時停止のお知らせを通知しました。</a
            >
          </span>
        </div>
        {/* <!--  --> */}
        <hr className="hr"/>
        <div className="page_update">
          <span className="date">2023年6月28日</span>
          <span>
            <a href="./news/202306280001"
              >本サイトの仕様変更のお知らせ</a
            >
          </span>
        </div>
        {/* <!--  --> */}
        <hr className="hr" />
      </div>
    </div>
    {/* <!-- ここから内容 --> */}
    <div className="sonota">
      <h2 className="color">このサイトについて</h2>
      <p>
        こちらは、Webツール制作が趣味の「かっちゃん」によって運営されている個人サイト「ランゲルハンス棟」です。ご自由にご覧ください！
      </p>
      <div className="card_style">
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img src="/focus.jpg" alt="" style={{width: "100%"}} />
            </div>
            <div className="card__textbox">
              <div className="card__titletext" >
                Kacchan Focus
              </div>
              <div
                className="card__overviewtext" >
                ここでは、最近制作したWebツールを紹介しております。ぜひ見ていってください！
              </div>
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img
                src="/utokyo_problem.jpeg"
                alt=""
                style={{width: "100%"}}
              />
            </div>
            <div className="card__textbox">
              <div className="card__utokyo" >
                あの、東大さん、
              </div>
              <div
                className="card__utokyo"
              >
                東大150周年まであと
              </div>
              <div
                className="card__utokyo"
              >
                <span
                >
                </span><UTAS/><span>日</span>
              </div>
              <div className="card__utokyo">
                なんですよね。気が早すぎですね！
              </div>
              <span className="card-url"
                ><a href="https://www.u-tokyo.ac.jp/ja/index.html" className="btn4"
                  >問題のページを開く</a
                ></span
              >
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img
                src="typing2.jpg"
                alt=""
                style={{width: "100%"}}
              />
            </div>
            <div className="card__textbox">
              <div className="card__titletext">かっちゃんタイピング</div>
              <div className="card__overviewtext">
                うp主の技術の粋をつめこんだタイピングもどき。パソコンでしかうまく動かなくて困っています。誰か助けてください。
              </div>
              <span className="card-url"
                ><a href="https://kacchan-typing.onrender.com" className="btn4"
                  >ページを開く</a
                ></span
              >
              <span className="card-url" style={{left: "120px"}}
                ><a href="https://github.com/random776/touch-typing" className="btn4"
                  >ソースコードを見る</a
                ></span
              >
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img
                src="/natsuyasumi2.jpg"
                alt=""
                style={{width: "100%"}}
              />
            </div>
            <div className="card__textbox">
              <div className="card__titletext">夏休みが終わるまで</div>
              <div className="card__overviewtext">
                フォロワーさまのご提案による「謎のカウントダウン」。永遠に15日間の夏休みを繰り返す装置です。なんか哀愁を感じますね（？）。
              </div>
              <span className="card-url"
                ><a href="https://random776.github.io/natsuyasumi/" className="btn4"
                  >ページを開く</a
                ></span
              >
              <span className="card-url" style={{left: "120px"}}
                ><a href="https://github.com/random776/natsuyasumi" className="btn4"
                  >ソースコードを見る</a
                ></span
              >
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img src="/kyo_muka.jpeg" alt="" style={{width: "100%"}} />
            </div>
            <div className="card__textbox">
              <div className="card__titletext">教務課お知らせ観測ツール</div>
              <div className="card__overviewtext">
                pythonなどを用いて、東大教養学部の教務課のお知らせを無理矢理Lineに届くようにした装置です。まあ、がばがばですが。
              </div>
              <span className="card-url"
                ><a href="https://github.com/random776/kyo_muka" className="btn4"
                  >ソースコードを見る</a
                ></span
              >
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img src="/ssic.jpeg" alt="" style={{width: "100%"}} />
            </div>
            <div className="card__textbox">
              <div className="card__titletext">ソフトクリームデコレーター</div>
              <div className="card__overviewtext">
                ソフトクリームの着せ替えアプリです。うp主の極めて幼稚な意図に気づいた人は何人いただろうか...。まあ、どうでもいいことではあるけれども。
              </div>
              <span className="card-url"
                ><a href="https://ssic-decorator.onrender.com" className="btn4"
                  >ページを開く</a
                ></span
              >
              <span className="card-url" style={{left: "120px"}}
                ><a href="https://github.com/random776/soft-cream" className="btn4"
                  >ソースコードを見る</a
                ></span
              >
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img src="/nauru.jpeg" alt="" style={{width: "100%"}} />
            </div>
            <div className="card__textbox">
              <div className="card__titletext">ナウルさんツイートクリエーター</div>
              <div className="card__overviewtext">
                ナウルさんの「一年のn％終了」ツイートを再現したはいいけれど、ひとさまのツイートを真似て何が楽しいのだろう？？
              </div>
              <span className="card-url"
                ><a href="https://nauru-calendar.onrender.com" className="btn4"
                  >ページを開く</a
                ></span
              >
              <span className="card-url" style={{left: "120px"}}
                ><a href="https://github.com/random776/nauru_calendar" className="btn4"
                  >ソースコードを見る</a
                ></span
              >
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img src="/sosuu.jpeg" alt="" style={{width: "100%"}} />
            </div>
            <div className="card__textbox">
              <div className="card__titletext">素数判定プログラム</div>
              <div className="card__overviewtext">
                わたしが初めてWebに公開し、ツイートしたWebアプリケーションです！
                簡単なhtmlとJavaScriptとで動いていることが特徴です。
              </div>
              <span className="card-url"
                ><a
                  href="https://random-page.onrender.com/prime_number2.html"
                  className="btn4"
                  >ページを開く</a
                ></span
              >
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img
                src="/soinsubunkai.jpeg"
                alt=""
                style={{width: "100%"}}
              />
            </div>
            <div className="card__textbox">
              <div className="card__titletext">素因数分解プログラム</div>
              <div className="card__overviewtext">
                「素数判定プログラム」を魔改造して、素因数分解ができるようにしました。とある素因数分解が好きなニキに対する献上品です！
              </div>
              <span className="card-url"
                ><a
                  href="https://random-page.onrender.com/prime_number3.html"
                  className="btn4"
                  >ページを開く</a
                ></span
              >
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img src="/tenkai.jpeg" alt="" style={{width: "100%"}} />
            </div>
            <div className="card__textbox">
              <div className="card__titletext">フラッシュ展開・因数分解</div>
              <div className="card__overviewtext">
                中学3年学習範囲の関門の一つである「展開」「因数分解」の初級練習ツールです。内蔵プログラムによりランダムに問題を作り出します。
              </div>
              <span className="card-url"
                ><a href="https://tenkai.onrender.com" className="btn4"
                  >ページを開く</a
                ></span
              >
              <span className="card-url" style={{left: "120px"}}
                ><a href="https://github.com/random776/tenkai" className="btn4"
                  >ソースコードを見る</a
                ></span
              >
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img src="/soinsuu2.jpeg" alt="" style={{width: "100%"}} />
            </div>
            <div className="card__textbox">
              <div className="card__titletext">フラッシュ素因数分解ニキ</div>
              <div className="card__overviewtext">
                全国の素因数分解ニキのためだけの、素因数分解の練習ができるツールです。「展開・因数分解」ツールと同じように、乱数生成により問題を作ります。
              </div>
              <span className="card-url"
                ><a href="https://soinsuuniki.onrender.com" className="btn4"
                  >ページを開く</a
                ></span
              >
              <span className="card-url" style={{left: "120px"}}
                ><a href="https://github.com/random776/soinsuuniki" className="btn4"
                  >ソースコードを見る</a
                ></span
              >
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="card_format">
          <div className="card card-skin">
            <div className="card__imgframe">
              <img src="/nshinkeisan.jpg" alt="" style={{width: "100%"}} />
            </div>
            <div className="card__textbox">
              <div className="card__titletext">フラッシュn進計算ニキ</div>
              <div className="card__overviewtext">
                n進法による四則演算の練習ができるファンツールです。「展開・因数分解」ツールと同じように、乱数生成により問題を作ります。
              </div>
              <span className="card-url"
                ><a href="https://nshincalc-niki.onrender.com" className="btn4"
                  >ページを開く</a
                ></span
              >
              <span className="card-url" style={{left: "120px"}}
                ><a href="https://github.com/random776/nshincalc_niki" className="btn4"
                  >ソースコードを見る</a
                ></span
              >
            </div>
          </div>
        </div>
        {/* <!--  --> */}
      </div>
    </div>
    <SubMenu />
        </main>
    )
}