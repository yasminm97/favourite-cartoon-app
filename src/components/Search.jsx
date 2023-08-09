import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeart as farHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeartIcon } from "@fortawesome/free-regular-svg-icons";

const Search = () => {
    const initalList = [
      'Tom and Jerry',
      'Spongebob Squarepants',
      'Looney Tunes',
      'The Last Airbender',
      'Ben 10',
      'Hey Arnold',
      'Phineas and Ferb',
    ];
    const [cartoons, setCartoons] = useState(initalList);
    const [cartoon, setCartoon] = useState('');
    const [favorites, setFavorites] = useState([]);

    const find = (e) => {
      const searchTerm = e.target.value;
      setCartoon(searchTerm);
      const filtered = initalList.filter((cartoon) =>
        cartoon.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      setCartoons(filtered);
    }
    return(
        <div className="search">
          <input name='cartoon' value={cartoon} onChange={find} placeholder="Search ..."/>
          <ul>
            {cartoons.length > 0
              ? cartoons.map((cartoon, index) => (
                  <li>{cartoon}</li>
                ))
              : 'No Cartoon found'}
          </ul>
          
        </div>
    )
}
export default Search