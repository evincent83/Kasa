export default function Thumb(props) {
  return (
    <div className="backThumb">
      <img className="imgThumb" src={props.imgThumb} alt={props.altThumb}></img>
      <div className="overlay">
        <p className="titleThumb">{props.titleThumb}</p>
      </div>
    </div>
  );
}
