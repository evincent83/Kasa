import { useParams } from "react-router-dom";
import Caroussel from "../components/caroussel";
import data from "../datas/logements.json";
import Tag from "../components/tag";
import { ReactComponent as Star } from "../img/Star.svg";
import Dropdown from "../components/dropdown";

export default function FicheLogement(props) {
  let { id } = useParams();
  const lgt = data.find((logement) => logement.id === id);

  return (
    <main>
      <Caroussel />
      <section className="blockLogement">
        <div className="blockInfo">
          <div className="titleSubImg">{lgt.title}</div>
          <div className="location">{lgt.location}</div>
          <div className="globalTag">
            {lgt.tags.map((elt) => (
              <Tag text={elt} />
            ))}
          </div>
        </div>
        <div className="blockHost">
          <div className="host">
            <div className="hostName">{lgt.host.name}</div>
            <div className="hostPicture">
              <img className="imgHost" src={lgt.host.picture} alt={lgt.host.name}></img>
            </div>
          </div>
          <div className="allStar">
            {[...Array(5).keys()].map((index) => (
              <Star key={index} className={`rating ${index + 1 <= lgt.rating ? "active" : ""}`} />
            ))}
          </div>
        </div>
      </section>
      <div className="underSection">
        <Dropdown title="Description" className="halfdropDown"><p>{lgt.description}</p></Dropdown>
        <Dropdown title="Équipements" className="halfdropDown"><ul className="equipements">{lgt.equipments.map((elt) => <li key={elt}>{elt}</li>)}</ul></Dropdown>
        </div>
    </main>
  );
}
