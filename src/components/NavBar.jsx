import { Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                    <Link className="li" to="/home">Home</Link>
                    </li>
                    <li>
                    <Link className="li" to="/cartoonSearch">Search</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}
export default NavBar