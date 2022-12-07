import { useParams } from "react-router-dom";
import Caroussel from "../components/caroussel";
import data from "../datas/logements.json";

export default function FicheLogement() {
  let { id } = useParams();

  const lgt = data.find((logement) => logement.id === id);
  return (
    <main>
      <Caroussel />
      <div className="titleSubImg">{lgt.title}</div>
    </main>
  );
}
