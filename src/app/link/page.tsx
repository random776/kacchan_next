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
          <h2 className="color">外部リンク</h2>
          <p>お好みで貼った外部リンクです。</p>
          <ul className="height">
            <li>
              <a href="https://www.u-tokyo.ac.jp/ja/index.html">
                東京大学公式サイト
              </a>
            </li>
            <li>
              <a href="https://utas.adm.u-tokyo.ac.jp/campusweb/campusportal.do">
                UTAS
              </a>
            </li>
            <li>
              <a href="https://itc-lms.ecc.u-tokyo.ac.jp">ITC-LMS</a>
            </li>
            <li>
              <a href="https://ut-base.info">UT-BASE</a>
            </li>
            <li>
              <a href="https://www.c.u-tokyo.ac.jp/zenki/index.html">
                東京大学教養学部(お知らせ）
              </a>
            </li>
            <li>
              <a href="https://gakuyu-kai.org">東京大学教養学部学友会</a>
            </li>
            <li>
              <a href="https://sites.google.com/site/iebtokyouniv/">
                東京大学教養学部情報教育棟
              </a>
            </li>
          </ul>
        </div>
      </div>
      <SubMenu />
    </>
  );
}
