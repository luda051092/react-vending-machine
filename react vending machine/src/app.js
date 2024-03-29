import './App.css';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candies from './Candies';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
               <NavBar />
               <Route exact path="/"><VendingMachine /></Route>
               <Route exact path="/soda"><Soda /></Route>
               <Route exact path="/chips"><Chips /></Route>
               <Route exact path="/candies"><Candies /></Route> 
            </BrowserRouter>
        </div>
    );
}

export default App;