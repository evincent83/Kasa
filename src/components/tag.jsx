export default function Tag(props) {
  return (
    <div className="tag" key={props.text}>
      {props.text}
    </div>
  );
}
