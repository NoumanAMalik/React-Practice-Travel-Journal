import Card from "./Card";
import data from "./data";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// console.table(data);

const App = () => {
    return (
        <>
            <header>
                <FontAwesomeIcon icon={faEarthAmerica} />
                <p>my travel journal.</p>
            </header>
            <Card />
        </>
    );
};

export { App as default };
