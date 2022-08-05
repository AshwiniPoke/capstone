import React from "react";
import '../../sass/main.css';
import { useNavigate, Link } from 'react-router-dom';
import heroImgPhone from '../../Images/homebanner.png';
import heroImg from '../../Images/heroImg-desktop.png';
import sec3Img from '../../Images/home-sec3Img.png';
import sec4Img from '../../Images/home-boyonhill.png';
import home1 from '../../Images/home1.png';
import home2 from '../../Images/home2.png';
import home3 from '../../Images/home3.png';
import home4 from '../../Images/home4.png';
import sec1sidearrow from '../../Images/sec1sidearrow.png';



const Home = () => {
    let navigate = useNavigate();

    return (
        <div className="homeContainer aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12">
            <section className="section1 aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12 sec1textbg">
            <img src={heroImgPhone} className="heroImgPhone" alt="heroImgPhone"></img>
                <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--hide" style={{ textAlign: "end" }} >
                    <img src={sec1sidearrow} className="sec1Sidearrow"></img>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 ">

                    <div className="sec1text">
                        <h1 className="headertxt">Shop the new Signature Collection</h1>
                        <p className="textdesktop">Lorem ipsum dolor sit amet consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lobortis mattis aliquam faucibus purus.</p>
                            <p className="textPhone">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <button className="shopbtn" onClick={() => navigate(`/products`)}>SHOP NOW</button>
                        {/* <p className="phoneviewdots"> ...</p> */}
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                    <img src={heroImg} className="homeHeroImg" alt="home-hero"></img>
                </div>

            </section>
            <section className=" aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12 section2">
                <div className="aem-GridColumn aem-GridColumn--default--10 Imagetopmargin">
                    <div className="aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12">
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--3">
                            <img src={home1} alt="1" className="ImgWidth" onClick={() => navigate(`/products`)}></img>
                            <div className="ImgBottom" style={{marginTop:"-75px"}}><h2 style={{margin:"0%", padding:"0%"}}>Shop Women</h2><p style={{margin:"2%"}}><small>Lorem ipsum dolor sit amet</small></p></div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--3">
                            <img src={home2} alt="2" className="ImgWidth" onClick={() => navigate(`/products`)}></img>
                            <div className="ImgBottom"><h2 style={{margin:"0%", padding:"0%"}}>Shop Men</h2><p style={{margin:"2%"}}><small>Lorem ipsum dolor sit amet</small></p></div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--3">
                            <img src={home3} alt="3" className="ImgWidth" onClick={() => navigate(`/products`)}></img>
                            <div className="ImgBottom"><h2 style={{margin:"0%", padding:"0%"}}>Jewellery</h2><p style={{margin:"2%"}}><small>Lorem ipsum dolor sit amet</small></p></div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--3 ">
                            <img src={home4} alt="4" className="ImgWidth" onClick={() => navigate(`/products`)}></img>
                            <div className="ImgBottom"><h2 style={{margin:"0%", padding:"0%"}}>Electronics</h2><p style={{margin:"2%"}}><small>Lorem ipsum dolor sit amet</small></p></div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className=" aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12 section3">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--6">
                    <div className="sec3text">
                        <h1 className="headertxt">Take off in the new <br />Signature Legging</h1>
                        <b>Lorem Ipsum Dolor Tempor</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                            <div className="aem-Grid aem-Grid--12 aem-Grid--phone--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--6">
                                <button className="shopcollbtn">SHOP COLLECTION</button>&nbsp;&nbsp;
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--6">
                                <button className="shopbtn" onClick={() => navigate(`/products`)}>SHOP NOW</button>
                                </div>
                            </div>
                        <img className="headerBorder" src={require('../../Images/max-width_header.svg').default} style={{marginTop:"3rem"}}></img>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                    <img src={sec3Img} className="sec3Img" alt="sec3Img"></img>
                </div>
            </section>
            <section className="section4 aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                    <img src={sec4Img} className="sec4Img" alt="sec4Img"></img>
                </div>
 
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--8 sec4div">
                    <div className="sec4text">
                        <h1 className="headertxt">Conquer your next adventure</h1>
                        <p><b>Lorem Ipsum Dolor Tempor</b></p>
                        <button className="shopdevice">SHOP DEVICES</button>
                    </div>
                </div>
                </section>

                <div className="aem-Grid aem-Grid--12">
                <img className="mapIcon" src={require('../../Images/map-pin.svg').default} ></img>
                <img className="mapBorder" src={require('../../Images/max-width_header.svg').default} ></img>

                </div>


        </div>
    )

}

export default Home;