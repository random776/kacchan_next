"use client";

import Header2 from "../../Basic/index2";
import SubMenu2 from "../../Basic/menuBar2";
import "../../styles/format.css";
import "../../styles/style.css";
import "../../styles/card.css";
import "../../styles/notice.css";
import "../../styles/news.css";

export default function Result() {
  return (
    <>
      <Header2 />
      <div className="sonota">
        <h2 className="color">シミュレーション科学の世界へようこそ</h2>
        <p>最終更新：2024年9月18日</p>
        <div className="section_box">
          以下の文章は地球惑星物理・環境学科の五月祭2024(5/18,19)で実際に展示した文章です。なお、そこまで読んでくださった方は多くなかった模様。
        </div>
        <div className="content">
          <p>
            皆さんも、1週間後の天気がなぜ予測できるのか、一度は気になったことがあると思います。また、最近気候変動の予測に関するニュースをよく見かけます。そのような将来の複雑な現象がなぜ予測できるのでしょうか。
          </p>
          <p>
            これを実現する強力なツールがスーパーコンピュータ（スパコン）などを用いたシミュレーションです。スパコンの計算速度が飛躍的に向上している現在、実際の現象を観測・実験することと並んで、コンピュータ上で再現することが現代科学で重要な研究手法となっています。
          </p>
          <p>
            例えば天気予報の場合、時間が経つとどのように空気や海水が流れるか、あるいは熱がどのように移動するか、ということは物理法則（方程式）が決めています。
            つまり、空気の流れの速さや温度が今どうなっているか、地形データなど（<strong>初期条件・境界条件</strong>）
            を把握することができれば、将来どうなるかということも、その物理法則に従って再現することができるわけです。
          </p>
          <ul>
            <li>
              高校物理で出てくる物理法則の例：重力に従う物体の運動方程式
              <div>
                <img className="math" src="/ma=mg.jpg" />
              </div>
              物体の落下などの挙動は、この式と初期条件（初速や位置など）によって予測できる。
            </li>
            <li>
              地球惑星物理で出てくる物理法則の例：ナヴィエ・ストークス方程式
              <div>
                <img className="math" src="/nabie-stokusu.jpg" />
              </div>
              気体や液体などの流体の速度と、圧力や粘性との関係を表したもの。少し難しいので、こんなものがあるんだ〜、と思っていただきたい。
            </li>
          </ul>
          <p>
            シミュレーションは天気予報のような未来予測だけでなく、昔の気候変動がどうだったか、などの過去に関する研究にも使われています。それだけでなく、2024年5月現在ニュースなどで問題にもなっている太陽フレアなど、多様な地球惑星物理現象の理解に応用されています。
          </p>
          <p>
            ただ、シミュレーションは万能ツールではありません。詳しい説明は省きますが、あくまでシミュレーションで使う物理モデルは<strong>実際の物理法則の近似に過ぎない</strong>ので、その物理モデルが現実の現象を反映しているか、きちんと議論しなければなりません。また物理現象は、初期・境界条件を少し変えただけでも、その後起こることが大きく変わってしまう場合があります（「バタフライ・エフェクト」で調べてみよう）。つまり、計算精度やシミュレーションで用いた物理モデルがいくら正しくても、初期条件が違うならば正しい結果は出ません。よって実際の研究では、観測での現在のデータの取得と、シミュレーションの物理モデルとの、両方の精度が重視されています。
          </p>
          <p>
            今回の展示では、一般的なパソコンの計算処理速度でも実行可能なシミュレーションをいくつか実演します。楽しくて奥深いシミュレーション科学の景色をどうぞお楽しみください。
          </p>
        </div>
      </div>
      <SubMenu2 />
    </>
  );
}
