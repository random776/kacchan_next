"use client";

import Header2 from "../../Basic/index2";
import SubMenu2 from "../../Basic/menuBar2";
import "../../styles/format.css";
import "../../styles/style.css";
import "../../styles/card.css";
import "../../styles/notice.css";
import "../../styles/news.css";
import 'katex/dist/katex.min.css';

// import MathRenderer from '../../Basic/MathRenderer'
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
const markdown = `
 準備中です。
`;


export default function Result() {
  return (
    <>
      <Header2 />
      <div className="sonota">
        <h2 className="color">CGSガウス単位系に関する備忘録</h2>
        <p>最終更新：2024年9月18日</p>
        <div className="section_box">
          以下の文章は地球惑星物理・環境学科の五月祭2024(5/18,19)で実際に展示した文章です。なお、そこまで読んでくださった方は多くなかった模様。
        </div>
        <div className="content">
        <Markdown rehypePlugins={[rehypeKatex]} remarkPlugins={[remarkMath]}>
            {markdown}
          </Markdown>
        </div>
      </div>
      <SubMenu2 />
    </>
  );
}
