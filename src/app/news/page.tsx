"use client"

import Header from "../Basic/index"
import SubMenu from "../Basic/menuBar";
import '../styles/format.css'
import '../styles/style.css'
import '../styles/card.css'
import '../styles/notice.css'
import '../styles/news.css'

export default function News() {
    return (
        <>
        <Header />
        <div className="sonota">
      <h2 className="color">ニュース・お知らせ</h2>
      <p>過去1年間のニュースやお知らせを掲載しております。</p>
      <div id="news">
        <div id="news_oshirase-viewer">
          <div id="news_oshirase">
            {/* <!--  --> */}
            <div className="news_update">
            <span className="news_date">2023年12月06日</span>
            <div className="topic2">Twitter・広報</div>
              <span className="span">
                <a href="./news/202312060001">本サイトのスライド写真を変更しました。</a
                >
                </span>
              </div>
            {/* <!--  --> */}
            <hr color="rgb(41, 41, 41)" className="hr"/>
            <div className="news_update">
            <span className="news_date">2023年7月21日</span>
            <div className="topic2">Twitter・広報</div>
              <span className="span">
                <a href="./news/202307210001">ツイート一時停止のお知らせを通知しました。</a
                >
                </span>
              </div>
            {/* <!--  --> */}
            <hr color="rgb(41, 41, 41)" className="hr"/>
            <div className="news_update">
              <span className="news_date">2023年6月28日</span>
              <div className="topic2">Web開発</div>
                <span className="span">
                  <a href="./news/202306280001">本サイトの仕様変更のお知らせ</a
                  >
                  </span>
                </div>
            {/* <!--  --> */}
            <hr color="rgb(41, 41, 41)" className="hr"/>
            <div className="news_update">
              <span className="news_date">2023年6月04日</span>
              <div className="topic2">Twitter・広報</div>
                <span className="span">
                  <a href="./news/202306040001">「ツイ廃活動半年に寄せて」を掲載しました。</a
                  >
                  </span>
                </div>
            {/* <!--  --> */}
            <hr color="rgb(41, 41, 41)" className="hr"/>
            <div className="news_update">
            <span className="news_date">2023年5月30日</span>
            <div className="topic2">Twitter・広報</div>
              <span className="span">
                <a href="./news/202305300001">ツイート一時停止のお知らせを通知しました。</a
                >
                </span>
              </div>
            {/* <!--  --> */}
            <hr color="rgb(41, 41, 41)" className="hr"/>
            <div className="news_update">
              <span className="news_date">2023年5月29日</span>
              <div className="topic2">Twitter・広報</div>
              <span className="span">
                <a href="./news/202305280001">フォロワーさまが500人を突破しました。</a
                >
                </span>
              </div>
            {/* <!--  --> */}
            <hr color="rgb(41, 41, 41)" className="hr"/>
              <div className="news_update">
            <span className="news_date">2023年5月11日</span>
            <div className="topic2">公式サイト</div>
            <span className="span">
              <a href="./news">ニュース・お知らせの掲載ページをこちらに移転しました。</a
              >
              </span>
            </div>
            {/* <!--  --> */}
            <hr color="rgb(41, 41, 41)" className="hr"/>
              <div className="news_update">
            <span className="news_date">2023年4月30日</span>
            <div className="topic2">Web開発</div>
            <span className="span">
              <a href="./news/202304300001">展開・因数分解の初級学習ツールを作成しました。</a
              >
              </span>
            </div>
            {/* <!--  --> */}
              <hr color="rgb(41, 41, 41)" className="hr"/>
            <div className="news_update">
            <span className="news_date">2023年4月25日</span>
            <div className="topic2">Twitter・広報</div>
              <span className="span">
                <a href="./news/202304250001">ツイート一時停止のお知らせを通知しました。</a
                >
                </span>
              </div>
            {/* <!--  --> */}
              <hr color="rgb(41, 41, 41)" className="hr"/>
          </div>
        </div>
      </div>
    </div>
        <SubMenu />
        </>
    )
}