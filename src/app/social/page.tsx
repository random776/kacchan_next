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
          <h2 className="color">社会問題に関する私見集</h2>
          <p>
            このサイトの管理者が、政治・社会問題などに関する個人の意見を書いたものです。DMなどで直接ここに書いたことに直接批評なさるのは構いませんが、SNS上に拡散などすることはお控えください。
          </p>
          <p>
            少なくともこういうことには疎いくせして書いているものですから、お手柔らかにお願いします。
          </p>
          <h2 className="color2">東大授業料値上げ問題について</h2>
          東大の財務状況上の問題や、それに伴う授業料値上げ問題、またその中で生じた運営側と学生側との「対話の不全」について書いています。
          <ul>
            <li>
              2024年11月9日：{" "}
              <a className="btn4" href="./social/nesage">
                「値上げ」決定下であえて「値下げ」を論じる
              </a>
            </li>
            <li>
              2024年10月20日：{" "}
              <a className="btn4" href="./social/gakusei-jichi">
                なぜか喧嘩腰な「学生自治の再建」再考
              </a>
            </li>
            <li>
              2024年9月20日：{" "}
              <a className="btn4" href="./social/gakuhi">
                学生自治会の「対話」姿勢を問う
              </a>
            </li>
          </ul>
        </div>
      </div>
      <SubMenu />
    </>
  );
}
