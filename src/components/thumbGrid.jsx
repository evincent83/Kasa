import data from "../datas/logements.json";
import Thumb from "../components/thumb";

export default function ThumbGrid() {
  const dataList = data.map((data) => {
    return { id: data.id, title: data.title, cover: data.cover };
  });
  const grid = dataList.map((data) => (
    <Thumb id={data.id} key={data.id} titleThumb={data.title} imgThumb={data.cover} altThumb={data.title} />
  ));
  return <section id="sectionThumb">{grid}</section>;
}
