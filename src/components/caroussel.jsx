import { useParams } from "react-router-dom";
import data from "../datas/logements.json";
import vectorLeft from "../img/arrow_left.png";
import vectorRight from "../img/arrow_right.png";
import { useState, useEffect } from "react";

export default function Caroussel() {
  let { id } = useParams();
  const lgt = data.find((logement) => logement.id === id);
  const lgtNbr = lgt.pictures.length;
  const [crslNbr, updateCrslNbr] = useState(1);
  useEffect(() => {
    if (crslNbr === lgtNbr + 1) {
      updateCrslNbr(1);
    }
    if (crslNbr === 0) {
      updateCrslNbr(lgtNbr);
    }
  }, [crslNbr]); // Ne prend compte que lorsque la variable est call.

  let crslArrows =
    lgtNbr === 1 ? null : (
      <>
        <p className="carousselNbr">
          {crslNbr}/{lgtNbr}
        </p>
        <div className="vectorLeft">
          <img className="vectorLeftImg" onClick={() => updateCrslNbr(crslNbr - 1)} src={vectorLeft}></img>
        </div>
        <div className="vectorRight">
          <img className="vectorRightImg" onClick={() => updateCrslNbr(crslNbr + 1)} src={vectorRight}></img>
        </div>
      </>
    );

  return (
    <div className="sectionCaroussel">
      <img className="imgCaroussel" src={lgt.pictures[crslNbr - 1]}></img>
      <div className="overlayCaroussel"></div>
      {crslArrows}
      {/* Si le nbr de logement est de 1 alors on affiche pas le carousselNbr ni les flèches sinon on affiche la variable crslArrows */}
    </div>
  );
}
