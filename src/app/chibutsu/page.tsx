"use client";

import Header from "../Basic/index";
import SubMenu from "../Basic/menuBar";
import "../styles/format.css";
import "../styles/style.css";
import "../styles/card.css";
import "../styles/notice.css";
import "../styles/news.css";

export default function Result() {
  return (
    <>
      <Header />
      <div className="sonota">
        <h2 className="color">地物関連</h2>
        <p>学科や地球惑星科学関連のことを書いています。</p>

        <div className="card_style">
          {/* <!--  --> */}
          <div className="card_format">
            <div className="card card-skin">
              <div className="card__textbox">
                <div className="card__titletext">
                  シミュレーション科学の世界へようこそ
                </div>
                <div className="card__overviewtext">
                  僕が五月祭のために一般向けに書いたシミュレーション科学の紹介文なのですが、あんまり日の目を見ることはなかったようです。
                </div>
                <span className="card-url">
                  <a href="./chibutsu/simulation" className="btn4">
                    ページを開く
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* <!--  --> */}
          </div>
      </div>
      <SubMenu />
    </>
  );
}
