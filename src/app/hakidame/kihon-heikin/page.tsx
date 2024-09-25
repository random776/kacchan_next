"use client";

import Header2 from "../../Basic/index2";
import SubMenu2 from "../../Basic/menuBar2";
import "../../styles/format.css";
import "../../styles/style.css";
import "../../styles/card.css";
import "../../styles/notice.css";
import "../../styles/news.css";
import "katex/dist/katex.min.css";

import UploadMarkdown from "../../Basic/uploadMarkdown";
import { useState } from "react";
import { Button } from "@mui/material";

type resultType =
  | { title: string; value1: number; value2: number; value3: number }[]
  | never[];

export default function Result() {
  const [inputData, setInputData] = useState("");
  const [, setResults] = useState<resultType>([]);
  const [average, setAverage] = useState<number | null>(null); // 計算結果を保持

  const handleCalculate = (data: string) => {
    const rows = data
      .trim()
      .split("\n")
      .map((row) => {
        const parts = row.split(/\s+/); // 空白で区切る
        const title = parts[0]; // 科目名を取り出す
        const value1 = parseFloat(parts[1]); // 数値を取得
        const value2 = parseFloat(parts[2]); // 数値を取得
        const value3 = parseFloat(parts[3]);
        return { title, value1, value2, value3 }; // オブジェクトで返す
      });
    calculateResults(rows);
  };

  const calculateResults = (data: resultType) => {
    let totalWeight = 0;
    let weightedScore = 0;

    data.forEach((item) => {
      const { value1, value2, value3 } = item;
      totalWeight += value1 * value3;
      weightedScore += value1 * value2 * value3;
    });

    const calculatedAverage = totalWeight !== 0 ? weightedScore / totalWeight : NaN;
    setResults(data); // パースしたデータをセット
    setAverage(calculatedAverage);
  };

  const saveFile = () => {
    const blob = new Blob([inputData], {
      type: ".md, text/markdown",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = localStorage.getItem("filename") ?? "hoge.md"; // localStorage上に保存したファイル名を使う。
    link.click();
  };

  const handleFileUpload = (content: string) => {
    setInputData(content);
    handleCalculate(content);
  };

  return (
    <>
      <Header2 />
      <div className="sonota">
        <h2 className="color">基本平均点簡易計算ツール</h2>
        <p>最終更新：2024年9月26日</p>
        <div className="section_box">
          基本平均点を概算したいときにサクッと計算するためのツール(2代目、初代は<a className="btn4" href="https://kihonheikin-calculator.onrender.com/">こちら</a>)です。
          指定の形式のファイル(拡張子 .md)をアップロード・保存できます。実際にスマホで打ち込もうとすると意外と疲れるので、パソコン推奨です。
        </div>
        <div className="content">
          <p>「科目名 単位数 点数 重率」の順番で入力してください。</p>
          <p>入力例 (実際にコピペしてみてください)</p>
          <div className="section_box2">
            <div><code>おふとぅん概論 2 95 1</code></div>
            <div><code>睡眠基礎演習 2 85 0.1</code></div>
          </div>
          <p>このとき、基本平均点は、94.0909 点 となります。</p>
          <p>入力内容を (ローカル環境に) 保存したい場合は「保存」を、保存したファイルを再度利用したい場合は「ファイルを選択」を、入力内容を消去したい場合は「消去」を押してください。</p>
          
          <div className="upload_save">
            <Button onClick={saveFile}>保存</Button>
            <UploadMarkdown onFileContentChange={handleFileUpload} />
          </div>
          
          <textarea
            rows={10}
            cols={50}
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
              handleCalculate(e.target.value);
            }}
            placeholder="入力"
          ></textarea>

          <div>
            {isNaN(average ?? NaN) ? (
              <p>入力は無効です。</p>
            ) : (
              <p>求めた基本平均点：{orgRound(average ?? 0, 10000)} 点</p>
            )}
          </div>
        </div>
      </div>
      <SubMenu2 />
    </>
  );
}

function orgRound(value: number, base: number) {
  return Math.round(value * base) / base;
}
