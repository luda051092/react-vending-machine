import {Link} from 'react-router-dom';
import './Snacks.css';

const Snacks = ({src=""}) => {
    return (<div className="Snacks">
        <img src={src} alt="Snacks" />

        <div className="Snacks-links">
            <Link exact to="/">Go back to the vending machine</Link>
        </div>
    </div>)
}


export default Snacks;