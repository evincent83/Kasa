import { useParams } from "react-router-dom";
import data from "../datas/logements.json";
import vectorLeft from "../img/arrow_left.png";
import vectorRight from "../img/arrow_right.png";
import { useState, useEffect } from "react";

export default function Carrousel() {
  let { id } = useParams();
  const lgt = data.find((logement) => logement.id === id);
  const lgtNbr = lgt.pictures.length;
  const [crslNbr, updateCrslNbr] = useState(1);
  const items = lgt.pictures.map((picture, index) => {
    return (
      <div key={index} className="carrouselItem">
        <img className="imgCarrousel" alt="Logement" src={picture}></img>
      </div>
    )
  });

  useEffect(() => {
    if (crslNbr === lgtNbr + 1) {
      updateCrslNbr(1);
    } // Si crslNbr est égale à la lenght max +1 alors tu reviens à 1
    if (crslNbr === 0) {
      updateCrslNbr(lgtNbr);
    } // Si crslNbr est égale à 0 (inférieur à 1) tu reviens au max de lgtNbr (lenght max)
  }, [crslNbr, lgtNbr]); // Ne prend compte que lorsque la variable est call.

  let crslArrows =
    lgtNbr === 1 ? null : (
      <>
        <div className="vectorLeft">
          <img className="vectorLeftImg" alt="Vector left" onClick={() => updateCrslNbr(crslNbr - 1)} src={vectorLeft}></img>
        </div>
        <p className="carrouselNbr">
          {crslNbr}/{lgtNbr}
        </p>
        <div className="vectorRight">
          <img className="vectorRightImg" alt="Vector right" onClick={() => updateCrslNbr(crslNbr + 1)} src={vectorRight}></img>
        </div>
      </>
    );

  return (
    <div className="sectionCarrousel">
      <div className="carrouselInner" style={{ transform: `translateX(-${[crslNbr - 1] * 100}%)` }}>
        {items}
      </div>
      <div className="overlayCarrousel"></div>
      {crslArrows}
      {/* Si le nbr de logement est de 1 alors on affiche pas le carrouselNbr ni les flèches sinon on affiche la variable crslArrows */}
    </div>
  );
}
