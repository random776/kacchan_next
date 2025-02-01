// "use client";

import Header2 from "../../Basic/index2";
import SubMenu2 from "../../Basic/menuBar2";
import SideBar2 from "../../Basic/sideBar2";
import "../../styles/format.css";
import "../../styles/style.css";
import "../../styles/card.css";
import "../../styles/notice.css";
import "../../styles/news.css";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "授業料値上げ報道に関する私見：学生自治会の「対話」姿勢を問う",
  description:
    "東京大学の授業料値上げ報道に関して、学生自治会などは「対話」に消極的であると大学側を批判しています。しかし、自治会側の「対話」姿勢に問題はないのでしょうか。それを含めて、今回の値上げ報道に関する私見を述べます。",
};

export default function Result() {
  return (
    <>
      <Header2 />
      <div className="main">
        <div className="sidebar">
          <SideBar2 />
        </div>
        <div className="sonota">
          <h2 className="color">学生自治会の「対話」姿勢を問う</h2>
          <p>投稿：2024年9月20日 最終更新：2024年9月22日</p>
          <div className="section_box">
            2024年9月10日、東京大学は学部生と修士生の授業料を約10万円値上げする案を各部会に提出しました。その報道に関する管理者の私見です。なお、学科その他の団体の意見を代表するものではありません。
          </div>
          <div className="content">
            <p>
              本サイトの管理者は大学の授業料値上げの方針については、
              <strong>原則として反対</strong>
              の立場をとっている。個人的にも家庭の負担が増えることは望ましくないし、経済的に困窮していて、本来入学できていた受験生/学生が教育を受けられないという事態だけは避けなければならない。また、今回の値上げは在校生に対する影響は少なく、抗議内容に利他的な側面があるためその点は大いに同意できる。
            </p>
            <p>
              また、5月の最初の報道があってから、大学側の対応が誠実だったとは言い難いのも頷ける。6月の「学生対話」における学生の声の反映が十分であったのかは大いに疑義がある。さらに大学運営側は世帯収入
              600 万円超～900
              万円以下の学生について、「出身地等個別の状況を勘案し」た経済支援の拡充
              [
              <a
                className="btn4"
                href="https://www.yomiuri.co.jp/kyoiku/kyoiku/news/20240607-OYT1T50172/"
              >
                1
              </a>
              ]
              を表明しているが、公平で学生側が納得する判断基準になるかは未だ不透明である（注1）。
            </p>
            <p>
              しかしながら、物価（特に水道光熱費）の高騰や国の運営費交付金の減額で、国公立大学が苦境に喘いでおり
              [
              <a
                className="btn4"
                href="https://www.yomiuri.co.jp/kyoiku/kyoiku/news/20240607-OYT1T50172/"
              >
                2
              </a>
              ]、学生側の論理だけで物事を決められないのもまた事実であると考える。
              東京大学も令和4年度には経常損失として51億円を計上している。令和5年度は黒字回復している[
              <a
                className="btn4"
                href="https://www.u-tokyo.ac.jp/ja/about/public-info/b06.html"
              >
                3
              </a>
              ] ものの、「人件費の抑制や事業の縮小など
              により不足する経費を捻出」[4]
              するという厳しい状況になっているというのも理解できる。
            </p>
            <p>
              このような大学側の事情に対して、
              <strong>
                学生自治会を含めた学生団体（以下自治会等）は建設的な議論を展開できているのだろうか。
              </strong>
              私はかなり疑わしいと考える。
            </p>
            <p>
              残念ながら自治会等は、学生側の論理と要求を強硬的に押し出す感情的な議論を展開しているように思われてならない（注2）。9月11日の緊急声明で自治会は、「卑劣」「騙し討ち」といった強い表現を用いて大学側を強く非難した。[
              <a
                className="btn4"
                href="https://todaijichikai.org/tuitionfee2024/phase2/#a2-2"
              >
                5
              </a>
              ]
              しかしながら、学生も大学の支出の恩恵をうけている大学の構成員である。本当に授業料をあげて欲しくないと思うならば、こちらからもほんのわずかでも大学の出費を減らす協力姿勢を示すのが筋である（注3）。
            </p>
            <p>
              さらに自治会は、大学側が「対話」に応じようとしない、という趣旨のことを述べているが、そもそも自治会側も大学側との「対話」に応じる気があるのか。「卑劣」という物言いは、かえって「対話」に応じない者のセリフのように思えてならない。
              そのような一方的主張に対して、大学側が誠実に「対話」を試みようとするかは、言わずもがなであると考える。
            </p>
            <p>
              また、これはごく一部の学生の話だが、安田講堂に侵入を試みて警備員を怪我させた事件は記憶に新しい[
              <a
                className="btn4"
                href="https://www.asahi.com/articles/ASS6Q362ZS6QUTIL00RM.html"
              >
                6
              </a>
              ]。暴力的手段を用いることは、いかなる理由があっても許されないことである。自治会がデモにおける警察力の導入を非難している[
              <a
                className="btn4"
                href="https://todaijichikai.org/tuitionfee2024/"
              >
                7
              </a>
              ]
              。しかしそのような警察力の導入は、この件のように基本的ルールを守らない学生がごく一部だがいることが背景にあるようにも思える。
            </p>
            <p>
              よく「東大の学費の値上げは、入学者の大学入学や教育の門戸を閉じることにつながる」という論が見られる。私も感覚的には頷けるのだが、根拠が明確でなく
              <strong>机上の空論感が否めない</strong>
              （注4）。経済支援策の効果も考慮しなければ判断できない問題である。この点に東大の運営側は「実証はできず仮定の議論の域を出ません」と述べており[4]、私はこの見解に一理あると考えている。
            </p>
            <p>これを踏まえて自治会等は、</p>
            <ul>
              <li>
                感情論とも受け取れる強硬な反対表明に終始せず、学生側からも建設的な「対話」を試みる
              </li>
              <li>
                学生も大学構成員であり、主張するのみでなくその一員として、支出削減のために可能なことに取り組む
              </li>
            </ul>
            <p>べきであると考える。また大学運営側には、</p>
            <ul>
              <li>基本的に授業料は据え置きの方向で検討すること</li>
              <li>やむを得ず値上げする場合は、より使途を明確にすること</li>
              <li>
                経済支援策の効果を客観的に評価できるよう、適用基準（どんな人は支援を受けられて、どんな人が支援から漏れてしまうのか）を具体的に示すこと
              </li>
            </ul>
            <p>
              をお願いする。最後になるが、今回の件の背景として国の運営交付金の削減が一つある。そのことも含めて、私たちもこれから十分議論していく必要があると考える。長々となってしまったが、最後まで読んでくださった方には心より感謝申し上げる。
            </p>

            <div className="section_box">
              <h3>注釈</h3>
              <ul>
                <li>
                  [注1]
                  「個別の状況」と言っても、その範囲は非常に多様であり、支援されるか否かが微妙な事例が多数存在する可能性がある。これにより、学生側がどのように評価されるのか不透明である。また、学生にとって書類上の手続きが煩雑化する懸念も生じる。さらに、大学運営側にとっても、手続きの増加に伴い事務職員の書類業務が増えることが想定され、これが大学側にとってのデメリットとなる可能性がある。
                </li>
                <li>
                  [注2]
                  誤解のないように申し上げるが、ここで個々人が「値上げ断固反対（または賛成）」と思うことを否定したいわけではない。ただ、そのような意見を取りまとめて大学側に伝え、協議する自治会のような団体がそのような強硬な態度で臨むと、かえって自らの対話や交渉の足枷になり得ることを以下で説明する。
                </li>
                <li>
                  [注3]
                  必要以上にエレベータを使わないこと、クーラーを使いながら広い空き教室を少人数で占有しない、などである。私自身も、エレベータの使用を必要最低限にしている他、クーラーの電源の消し忘れ防止に努めている。
                </li>
                <li>
                  [注4]
                  この点は値上げ報道当初から私も疑問に感じており、ファクトチェックAI「Genspark
                  Autopilot Agent」で解析を試みた。
                  「東大の学費の値上げは、入学者の大学入学や教育の門戸を閉じることにつながる」という問に対し、「部分的な支持が見られるが、直接的に門戸を閉じることを示す明確な証拠は不足しており、懸念が示されているにとどまる。大学側は経済的支援策を拡充しようとしているが、その効果は不明。」という趣旨の回答を得ている。
                  <a
                    className="btn4"
                    href="https://www.genspark.ai/autopilotagent?id=2b170272-061f-4078-a61a-7d1a7fcb6991"
                  >
                    こちら
                  </a>
                  に回答全文を載せてある。
                </li>
              </ul>
              <h3>参考資料</h3>
              <ul>
                <li>
                  [1] 東京大学.
                  <a
                    className="btn4"
                    href="https://www.u-tokyo.ac.jp/content/400247072.pdf"
                  >
                    授業料改定案及び学生支援の拡充案について
                  </a>
                </li>
                <li>
                  [2] 読売新聞.
                  <a
                    className="btn4"
                    href="https://www.yomiuri.co.jp/kyoiku/kyoiku/news/20240607-OYT1T50172/"
                  >
                    国立大の財務「もう限界」…国立大学協会が異例の声明.
                  </a>
                </li>
                <li>
                  [3] 東京大学.
                  <a
                    className="btn4"
                    href="https://www.u-tokyo.ac.jp/ja/about/public-info/b06.html"
                  >
                    財務情報インデックス.
                  </a>
                </li>
                <li>
                  [4] 総長対話およびアンケートにおいて
                  多く寄せられた質問・疑問について (２０２４年８月２３日)
                </li>
                <li>
                  [5] 教養学部学生自治会.
                  <a
                    className="btn4"
                    href="https://todaijichikai.org/tuitionfee2024/phase2/#a2-2"
                  >
                    6月21日「総長対話」以降の本会の対応.
                  </a>
                </li>
                <li>
                  [6] 朝日新聞.
                  <a
                    className="btn4"
                    href="https://www.asahi.com/articles/ASS6Q362ZS6QUTIL00RM.html"
                  >
                    東大安田講堂に学生侵入、警備員けが　キャンパスでは値上げ反対デモ.
                  </a>
                </li>
                <li>
                  [7] 教養学部学生自治会.
                  <a
                    className="btn4"
                    href="https://todaijichikai.org/tuitionfee2024/"
                  >
                    授業料値上げ対応特設ページ.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SubMenu2 />
    </>
  );
}
