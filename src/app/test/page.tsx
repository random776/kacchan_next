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
          <h2 className="color">共通テスト予想問題</h2>
          <p>
            共通テスト予想問題（笑）の作成中です。パロディー程度のものなので、共通テスト対策としての実用性は皆無です。
          </p>
          <ul className="height">
            <li>
              <a href="https://random776.github.io/kacchan-uts2-22/pdf/butsuri.pdf">
                物理(105KB)
              </a>
            </li>
            <li>
              <a href="https://random776.github.io/kacchan-uts2-22/pdf/ibaraki.pdf">
                大都会イバラキスタン(452KB)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <SubMenu />
    </>
  );
}
