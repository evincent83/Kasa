export default function ImgSubHeader (props) {
    let title = (props.title) && <h1>Chez vous, partout et ailleurs</h1>;
    return (
        <div>
            <div className="overlayBack"></div>
            <img className="backSubHeader" src={props.backImg} alt={props.alt}></img>
            {title}
        </div>
    )
}