"use client"

import Header from "../Basic/index";
import SubMenu from "../Basic/menuBar";
import '../styles/format.css'
import '../styles/style.css'
import '../styles/card.css'
import '../styles/notice.css'
import '../styles/news.css'

export default function Result() {
  return (
    <>
      <Header />
      <div className="sonota">
        <h2 className="color">東大理系生お役立ちツール</h2>
        <p>
          こちらでは、東大（に限らず）理系生の実験などの計算に役立ちそうなツールをいくつか用意しております。ぜひご活用ください。
        </p>
        <h2 className="color2">進学選択</h2>
        <ul className="height">
          <li>
            基本平均点簡易計算ツール
            <a href="https://kihonheikin-calculator.onrender.com">
              https://kihonheikin-calculator.onrender.com
            </a>
            <p>
              うp主はこんなちゃっちいツールで
              <a href="https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiv5pidmeP9AhUIAN4KHWscAicQFnoECAsQAQ&url=https%3A%2F%2Fwww.utes.jp%2F&usg=AOvVaw1HkxqRgVzCPo7B9ILlqm6o">
                UTES
              </a>
              に対抗できるとでも思ったのか。正直UTESをおすすめします。
            </p>
          </li>
          <li>
            基本平均点学習ツール
            <a href="https://kihonheikin-practice.onrender.com">
              https://kihonheikin-practice.onrender.com
            </a>
            <p>基本平均点の計算を、数式を通して学習できます。</p>
          </li>
        </ul>
        <h2 className="color2">基礎物理学実験</h2>
        <ul>
          <li>
            実験標準偏差計算ツール
            <a href="https://standard-7j03.onrender.com">
              https://standard-7j03.onrender.com
            </a>
          </li>
          <li>
            不確かさの伝播則計算ツール
            <a href="https://error-calculator.onrender.com">
              https://error-calculator.onrender.com
            </a>
          </li>
        </ul>
        <h2 className="color2">力学・電磁気学</h2>
        <ul>
          <li>
            ベクトル内積外積計算セット
            <a href="https://vector-calculator.onrender.com">
              https://vector-calculator.onrender.com
            </a>
            <p>
              ベクトルの内積や外積を計算するものは、ネット探せばどこにでもある。
            </p>
          </li>
        </ul>
        <h2 className="color2">線型代数学</h2>
        <ul>
          <li>
            行基本変形計算ツール
            <a href="https://matrix-calculator-t7fc.onrender.com">
              https://matrix-calculator-t7fc.onrender.com
            </a>
            <p>注）パソコン環境での操作推奨です。</p>
          </li>
        </ul>
        <h2 className="color2">物理学科専門科目「電磁気学I」</h2>
        <ul>
          <li>
            特殊相対論数値計算ツール
            <a href="https://relativity-keisan.onrender.com">
              https://relativity-keisan.onrender.com
            </a>
          </li>
        </ul>
        <h2 className="color2">総合科目E系列「地球惑星物理学入門」</h2>
        <ul>
          <li>
            2023年度かっちゃん試験持ち込み資料(159KB)
            <p>
              <a href="https://random776.github.io/kacchan-uts2-22/pdf/chibutsu_nyumon.pdf">
                https://random776.github.io/kacchan-uts2-22/pdf/chibutsu_nyumon.pdf
              </a>
            </p>
          </li>
        </ul>
        <h2 className="color2">地球惑星物理学科専門科目「地球惑星物理学観測実習」</h2>
        <ul>
          <li>
            地震波データを用いた屈折法構造探索ツール（水平n層モデル）
            <p>
              <a href="https://jishinha.vercel.app/">
              https://jishinha.vercel.app/
              </a>
            </p>
          </li>
        </ul>
      </div>
      <SubMenu />
    </>
  );
}
