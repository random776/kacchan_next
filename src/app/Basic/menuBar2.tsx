

export default function SubMenu2() {
    return (
        <>
        {/* <!-- 以下メニューバー --> */}
    <div className="sub_menu">
      <div className="logo2">
        <img className="logo_area2" src="/logoimage.jpeg" alt="" />
      </div>
      <div className="header2">
        <header>
        <div className="header3">
          <a href="../">HOME</a>
          <a href="../news">ニュース</a>
          <a href="../contact">連絡先（SNS）</a>
          </div>
          <div className="header3">
          <a href="../helpful">東大理系生お役立ちツール</a>
          <a href="../link">外部リンク</a>
          </div>
        </header>
      </div>
      <div className="under">
        <small>© 東京大学駒場キャンパス ランゲルハンス棟</small>
      </div>
    </div>
    {/* <!-- メニューバー終了 --> */}
        </>
    )
}