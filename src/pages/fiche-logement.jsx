import { useParams} from "react-router-dom";

export default function FicheLogement () {
    let { id } = useParams();
    
    return (
        <>
        <p>FicheLogement</p>
        <div>test : {id}</div>
        </>
    )
}