import imgLoad from "../assets/rick_morty_load.png";
import "../stylesheets/Loading.css";

const Loading = () => {
    return(
        <div className="loading">
            <img className="img-loading" src={imgLoad} alt="rick-and-morty-load"/>
            <h1>Loading<span className="loading-dot1"> .</span><span className="loading-dot2"> .</span><span className="loading-dot3"> .</span></h1>
        </div>
    )
};

export default Loading;