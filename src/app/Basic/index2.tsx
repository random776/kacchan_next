import Oarai from "/oarai.jpg"
import Jobansen from "/jobansen.jpg"
import MitoTrain from "/mito_train.jpg"
import Otonebashi from "/otonebashi.jpg"
import Logo from "/logoimage.jpeg"

export default function Header2() {
    return (
        <>
        <header>
      <div className="header-logo-menu">
        <div id="nav-drawer">
          <input id="nav-input" type="checkbox" className="nav-unshown" />
          <label id="nav-open" htmlFor="nav-input"><span></span></label>
          <label className="nav-unshown" id="nav-close" htmlFor="nav-input"></label>
          <div id="nav-content">
            <header>
              <ul>
              <li><a href="../" className="btn4">HOME</a></li>
                <li><a href="../news" className="btn4">ニュース</a></li>
                <li><a href="../contact" className="btn4">連絡先（SNS）</a></li>
                <li>
                  <a href="../helpful" className="btn4"
                    >東大理系生お役立ちツール</a
                  >
                </li>
                <li><a href="../link" className="btn4">外部リンク</a></li>
                <li><a href="../test" className="btn4">共通テスト対策</a></li>
              </ul>
            </header>
          </div>
        </div>
        <div className="logo-area">
          <a href="../"
            ><img className="logo" src={Logo} alt=""
          /></a>
        </div>
      </div>
      <div id="menu-bar">
        <ul>
          <li><a href="../" className="btn4">HOME</a></li>
          <li><a href="../news" className="btn4">ニュース</a></li>
          <li><a href="../contact" className="btn4">連絡先（SNS）</a></li>
          <li>
            <a href="../helpful" className="btn4">東大理系生お役立ちツール</a>
          </li>
          <li><a href="../link" className="btn4">外部リンク</a></li>
          <li><a href="../test" className="btn4">共通テスト対策</a></li>
        </ul>
      </div>
      <div className="slide">
      <img className="item1" src={Oarai} alt="A" />
        <img className="item2" src={Jobansen} alt="B" />
        <img className="item3" src={MitoTrain} alt="C" />
        <img className="item4" src={Otonebashi} alt="D" />
      </div>
    </header>
        </>
    )
}