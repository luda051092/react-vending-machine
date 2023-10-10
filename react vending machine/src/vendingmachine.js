import { Link } from 'react-router-dom';
import imgVendingMachine from './vending-machine.jpg';
import './VendingMachine.css';

const VendingMachine = () => {
    return (<div className="VendingMachine">
        <img src={imgVendingMachine}/>
        <div className="Vending-Machine-links">
            <Link exact to="/soda">Soda</Link>
            <Link exact to="/chips">Chips</Link>
            <Link exact to="/candies">Candies</Link>
        </div>

    </div>)
}

export default VendingMachine;