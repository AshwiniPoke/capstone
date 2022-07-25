import React from 'react';
import { heroBanner } from '../Data';

const Banner = () =>{
    return (
        <>
            <div className=" aem-Grid aem-Grid--12 container heroImg">
               {heroBanner.map(element => {
                    return (
                        <>
                            <div className=" aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 heroTxt">
                                <h1 className="whiteTxt">Men's Outerwear</h1>
                                <hr className="heroHr" />
                            </div>
                            <div className="heroImg aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 heroBanner">
                                <img src={element.heroimg} alt='HeroBanner' className="herobanner"></img>
                            </div>
                        </>
                    )
                }
                )}
            </div>
            </>
    )
}

export default Banner;