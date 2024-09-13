import Header2 from "../../Basic/index2"
import SubMenu2 from "../../Basic/menuBar2";
import Tenkai from "/tenkai.jpeg"

export default function News() {
    return (
        <>
        <Header2 />
        <div className="sonota">
            <div><small className="topic">Web開発</small></div>
            <div><small>掲載日：2023年4月30日</small></div>
            <h2 className="color3">展開・因数分解の初級学習ツールを作成</h2>
            <p> Webエンジニアリングで学習教材を作ろうとする試みの一つとして、中学3年数学で一つの関門になる「展開」や「因数分解」の基礎的な計算練習ができるアプリケーションを作成しました。</p>
            <img src={Tenkai} alt="" className="img" />
            <p> 展開・因数分解の両方の練習に対応しており、内蔵プログラムによりランダムに問題を作成します。「答え合わせ」のボタンによって、計算したあとすぐに答えが確認できることが特徴です。</p>
            <p> 現在は、各項の係数が整数で2次の項の値が1の場合にしか対応していませんが、それ以外の問題パターンにも対応できるようにすることが当面の目標です。</p>
            <ul>
                <li><a href="https://random776.github.io/kacchan-uts2-22/" className="btn4">ホームに戻る</a></li>
                <li><a href="https://tenkai.onrender.com" className="btn4">今回作ったツールはこちら</a></li>
            </ul>
            <h2 className="color2">関連記事</h2>
            <div className="card_style">
                <div className="card_format">
                    <div className="card card-skin">
                      <div className="card__imgframe">
                        <img src={Tenkai} alt="" style={{width: "100%"}} />
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
                </div>
    </div>
        <SubMenu2 />
        </>
    )
}