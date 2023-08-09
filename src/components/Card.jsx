import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeart as farHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeartIcon } from "@fortawesome/free-regular-svg-icons";

const Card = ({cartoon}) => {
    const [favorites, setFavorites] = useState([]);
    const toggleFavorite = (cartoon) => {
        if (favorites.includes(cartoon)) {
          setFavorites(favorites.filter((fave) => fave !== cartoon));
        } else {
          setFavorites([...favorites, cartoon]);
        }
      };
    return(
        <>
        {cartoon}
        <span
            className="heart-icon"
            onClick={() => toggleFavorite(cartoon)}
            >
            <FontAwesomeIcon
                icon={favorites.includes(cartoon) ? faHeart : farHeartIcon}
            />
            </span>
        </>
    )
}
export default Card