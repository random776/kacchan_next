"use client";

import Header from "../Basic/index";
import SubMenu from "../Basic/menuBar";
import SideBar from "../Basic/sideBar";
import "../styles/format.css";
import "../styles/style.css";
import "../styles/card.css";
import "../styles/notice.css";
import "../styles/news.css";

export default function Result() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="sonota">
          <h2 className="color">地物関連</h2>
          <p>学科や地球惑星科学関連のことを書いています。</p>

          <div className="card_style">
            {/* <!--  --> */}
            <div className="card_format">
              <div className="card card-skin">
                <div className="card__textbox">
                  <div className="card__titletext">
                    かっちゃんの無題のノート
                  </div>
                  <div className="card__overviewtext">
                    地球科学や物理・プログラミング関連のことをこちらに移転しました。Markdownベースの静的サイトジェネレーターであるDocusaurusで作成しました。
                  </div>
                  <span className="card-url">
                    <a href="https://kacchan-docs.vercel.app/" className="btn4">
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
                  <div className="card__titletext">
                    シミュレーション科学の世界へようこそ
                  </div>
                  <div className="card__overviewtext">
                    僕が五月祭のために一般向けに書いたシミュレーション科学の紹介文なのですが、あんまり日の目を見ることはなかったようです。
                  </div>
                  <span className="card-url">
                    <a
                      href="https://kacchan-docs.vercel.app/docs/physics/gogatsusai"
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
                  <div className="card__titletext">Python：自分用メモ</div>
                  <div className="card__overviewtext">
                    自分が実験などで解析に使うPythonコードをまとめたものです。随時更新中。
                  </div>
                  <span className="card-url">
                    <a
                      href="https://kacchan-docs.vercel.app/docs/physics/python"
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
                  <div className="card__titletext">
                    本サイトの日の出・日の入り時刻の計算方法
                  </div>
                  <div className="card__overviewtext">
                    本サイトのトップページに表示される日の出・日の入りの概算値の計算方法を書いています。
                  </div>
                  <span className="card-url">
                    <a
                      href="https://kacchan-docs.vercel.app/docs/physics/hinode"
                      className="btn4"
                    >
                      ページを開く
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* <!--  --> */}
          </div>
        </div>
      </div>
      <SubMenu />
    </>
  );
}
