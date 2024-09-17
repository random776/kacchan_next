export default function SubMenu2() {
  return (
    <>
      {/* <!-- 以下メニューバー --> */}
      <div className="sub_menu">
        <div className="logo2">
          <img className="logo_area2" src="/logoimage_2.jpeg" alt="" />
        </div>
        <div className="header2">
          <header>
            <div className="header3">
              <a href="../">HOME</a>
              <a href="../news">ニュース</a>
              <a href="../chibutsu">地物関連</a>
            </div>
            <div className="header3">
              <a href="../link">外部リンク</a>
              <a href="../test">共通テスト対策問題</a>
            </div>
          </header>
        </div>
        <div className="under">
          <small>© 地物学科かっちゃん (2024)</small>
        </div>
      </div>
      {/* <!-- メニューバー終了 --> */}
    </>
  );
}
