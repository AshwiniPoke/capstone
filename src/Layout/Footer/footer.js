import React from "react";
import '../../Images/instagram.svg'
import { footerlist } from '../Data';
import logo from '../../Images/logo-footer.png';
import '../../sass/main.css';

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className=" aem-Grid aem-Grid--12 container footer-container">

                {footerlist.map(element => {
                    return (
                        <>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                <ul className="uo-list ">
                                    <li>{element.liitem1}</li>
                                    <li >{element.liitem2}</li>
                                    <li >{element.liitem3}</li>
                                    <li >{element.liitem4}</li>
                                </ul>

                            </div>



                        </>

                    )
                })}


                
                <div className="footericons aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                <span>  <img src={require('../../Images/instagram.svg').default} alt='icon' />&nbsp;</span>
                                <span> <img src={require('../../Images/facebook.svg').default} alt="icon" />&nbsp;</span>
                                <span> <img src={require('../../Images/twitter.svg').default} alt="icon" />&nbsp;</span>

                            </div>
                          
                  
            </div> 


            <hr />
            <div className="lower-footer aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <img src={logo} alt="footer-logo"></img>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <span>© Company Name Address Ave, City Name, State ZIP</span>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <span>Terms of Use </span> &nbsp; <span>Privacy Policy</span>
                </div>

            </div>

            <br />
        </footer>
    )

    // })}
}

export default Footer;