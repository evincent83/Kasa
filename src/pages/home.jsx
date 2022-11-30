import ImgSubHeader from "../components/imgSubHeader";
import ThumbGrid from "../components/thumbGrid";
import backImg from '../img/imgSubHeader.png';

export default function Home() {
  return (
    <main>
      <ImgSubHeader backImg={backImg} alt={"Background - Chez vous et partout ailleurs"} title/>
        <div id="bgHome">
          <ThumbGrid />
        </div>
    </main>
  );
}