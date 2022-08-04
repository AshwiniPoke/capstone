import React , {useState} from "react";
import { navbarList } from '../Data.js';
import logo from '../../Images/logo.png';
import menu from '../../Images/burgerIcon.png';
import { useSelector } from "react-redux/es/exports";
import '../../sass/main.css';
import { Link } from "react-router-dom";
import Filter from '../../Pages/filter';


const Navbar = () => {
    const [isShown, setIsShown] = useState(false);

    const showFilter = event => {
        setIsShown(current => !current);
    }

    const cartCounter = useSelector((value) => {
        return value.cart.item;
    });
    const totalCartItem = cartCounter.length;

    return (
        <>
            <nav className=" aem-Grid aem-Grid--12 header" aria-label="navbar">
                {navbarList.map(navElement => {
                    return (
                        <>

                  <img src={menu} alt="menu" className="aem-GridColumn aem-GridColumn--phone--1 menuicon" onClick={showFilter} />
                                  {
                            isShown && <Filter /> 
                        }

                            <a href="/capstone" className=" aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--6 aem-GridColumn--tablet--1 logo nav-items"><img src={logo} className="logoProp" alt="logo"></img>
                            </a>

                            <ul className="nav-items aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--hide aem-GridColumn--tablet--8">
                                <li className="nav-link navBorder">{navElement.navlink1}</li>&nbsp;&nbsp;
                                <li className="nav-link">{navElement.navlink2}</li>&nbsp;&nbsp;
                                <li className="nav-link">{navElement.navlink3}</li>&nbsp;&nbsp;
                                <li className="nav-link">{navElement.navlink4}</li>&nbsp;&nbsp;
                                <li className="nav-link">{navElement.navlink5}</li>&nbsp;&nbsp;
                            </ul>
                            <ul className="nav-items align-right aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--3">

                                {/* <li className="nav-link"><img src={require('../../Images/search.svg').default} alt="search"></img><span className="linkUnderline"> {navElement.text1}</span> </li>
                                <li className="nav-link "><img src={require('../../Images/user.svg').default} alt="user" className="linkUnderline"></img><span className="linkUnderline">{navElement.text2}</span></li> */}
                                <li> <Link to="/cart">
                                <img src={require('../../Images/shopping-bag.svg').default} alt="bag" className="bagImg" /><span className="cart-count">{totalCartItem}</span>
                                </Link></li>

                            </ul>
                        </>
                    )
                })
                }

            </nav>
        </>
    )

}

export default Navbar;