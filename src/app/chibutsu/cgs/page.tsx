"use client";

import Header2 from "../../Basic/index2";
import SubMenu2 from "../../Basic/menuBar2";
import "../../styles/format.css";
import "../../styles/style.css";
import "../../styles/card.css";
import "../../styles/notice.css";
import "../../styles/news.css";
import "katex/dist/katex.min.css";

// import MathRenderer from '../../Basic/MathRenderer'
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
const markdown = `
 > CGS静電単位系は、クーロンの法則を元にして、クーロンの法則が係数を含まなくなるように電荷の単位を決定し、電荷の単位を元に電流などの他の電磁気の単位を構築したものである。CGS静電単位系では、クーロンの法則は次のように書き表される。 
 $$ 
     F = \\frac{q_1 q_2}{r^2}
   $$

`;

export default function Result() {
  return (
    <>
      <Header2 />
      <div className="sonota">
        <h2 className="color">CGSガウス単位系に関するリンク集</h2>
        <p>最終更新：2024年9月18日</p>
        <div className="section_box">
          『宇宙電磁流体力学の基礎』でほとんどCGSガウス単位系を説明せずに使っていたので、その備忘録として記しておく。
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
