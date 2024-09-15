

export default function Header() {
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
                <li><a href="./" className="btn4">HOME</a></li>
                <li><a href="./hakidame" className="btn4">掃き溜め</a></li>
                <li><a href="./link" className="btn4">外部リンク</a></li>
                <li><a href="./test" className="btn4">共通テスト対策</a></li>
              </ul>
            </header>
          </div>
        </div>
        <div className="logo-area">
          <a href="./"
            ><img className="logo" src="/logoimage_2.jpeg" alt=""
          /></a>
        </div>
      </div>
      <div id="menu-bar">
        <ul>
          <li><a href="./" className="btn4">HOME</a></li>
          <li><a href="./hakidame" className="btn4">掃き溜め</a></li>
          <li><a href="./link" className="btn4">外部リンク</a></li>
          <li><a href="./test" className="btn4">共通テスト対策</a></li>
        </ul>
      </div>
      <div className="slide">
        <img className="item1" src="/oarai.jpg" alt="A" />
        <img className="item2" src="/jobansen.jpg" alt="B" />
        <img className="item3" src="/mito_train.jpg" alt="C" />
        <img className="item4" src="/otonebashi.jpg" alt="D" />
      </div>
    </header>
        </>
    )
}