import { useState } from "react";
import Card from "./Card";

const CartoonsList = () =>{
    
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

   
    return(
        <div className="home cartoon">
            <h2>Favorite Cartoons List</h2>
            <ul>
            {cartoons.map((cartoon, index) => (
                <li><Card cartoon={cartoon} /></li>
                ))}
            </ul>
        </div>
       

    )
}
export default CartoonsList