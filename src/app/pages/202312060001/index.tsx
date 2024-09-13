import Header2 from "../../Basic/index2"
import SubMenu2 from "../../Basic/menuBar2";
import Oarai from "/oarai.jpg";
import Jobansen from "/jobansen.jpg";
import MitoTrain from "/mito_train.jpg";
import Otonebashi from "/otonebashi.jpg";

export default function News() {
    return (
        <>
        <Header2 />
        <div className="sonota">
            <div><small className="topic">Twitter・広報</small></div>
            <div><small>掲載日：2023年12月6日</small></div>
            <h2 className="color3">[告知]本サイトスライド写真変更</h2>
            <p>今日(12月6日)、本サイト上部のスライド写真を変更いたしましたので告知します。</p>
            <p>１枚目：大洗磯前神社（茨城県大洗町）にて</p>
            <p>２枚目：JR水戸駅（茨城県水戸市）にて</p>
            <p>３枚目：桜川河川敷（茨城県水戸市）にて</p>
            <p>４枚目：利根川（茨城県取手市、千葉県我孫子市境）にて</p>

            <img style={{width: "70%"}} src={Oarai} alt="A" />
            <img style={{width: "70%"}} src={Jobansen} alt="B" />
            <img style={{width: "70%"}} src={MitoTrain} alt="C" />
            <img style={{width: "70%"}} src={Otonebashi} alt="D" />
    </div>
        <SubMenu2 />
        </>
    )
}