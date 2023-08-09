import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <footer>
            <div className="footer">
                <Link className="fLink" to="/home">Home Page</Link>
                <img src="logo192.png"/>
            </div>
        </footer>
    )
}
export default Footer