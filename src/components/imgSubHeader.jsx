export default function ImgSubHeader(props) {
  let title = props.title && <h2 id="titleOverlay">Chez vous, partout et ailleurs</h2>;
  return (
    <div className={`container ${props.className ? props.className : ""}`}>
      <img className="imgBack" src={props.backImg} alt={props.alt}></img>
      <div className="overlayFilter"></div>
      {title}
    </div>
  );
}
