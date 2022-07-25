import React from "react";
import '../../sass/main.css';
import heroImg from '../../Images/home-heroImg.png';
import sec3Img from '../../Images/home-sec3Img.png';
import sec4Img from '../../Images/home-sec4Img.png';
import home1 from '../../Images/home1.png';
import home2 from '../../Images/home2.png';
import home3 from '../../Images/home3.png';
import home4 from '../../Images/home4.png';



const Home = () => {
    return (
        <div className="homeContainer aem-Grid aem-Grid--default--12">
            <section className="section1 aem-Grid aem-Grid--default--12">
                <div className="aem-GridColumn aem-GridColumn--default--6">
                    <h1>Shop the new Signature Collection</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lobortis mattis aliquam faucibus purus.</p>
                    <button>SHOP NOW</button>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6">
                    <img src={heroImg} className="homeHeroImg" alt="home-hero"></img>
                </div>

            </section>
            <section className="section2 aem-Grid aem-Grid--default--12">
<div className="aem-GridColumn aem-GridColumn--default--9">
    <img src={home1}  alt="1"></img>
    <img src={home2} alt="2"></img>
    <img src={home3} alt="3"></img>
    <img src={home4} alt="4"></img>


</div>
            </section>
            <section className="section3 aem-Grid aem-Grid--default--12">
                <div className="aem-GridColumn aem-GridColumn--default--6">
                    <h1>Take off in the new Signature Legging</h1>
                    <b>Lorem Ipsum Dolor Tempor</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6">
                    <img src={sec3Img} className="sec3Img" alt="sec3Img"></img>
                </div>
            </section>
            <section className="section4 aem-Grid aem-Grid--default--12">
                <div className="aem-GridColumn aem-GridColumn--default--8">
                <img src={sec4Img} className="sec4Img" alt="sec4Img"></img>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4">
                    <h1>Conquer your next adventure</h1>
                    <b>Lorem Ipsum Dolor Tempor</b>
                    <button>SHOP DEVICES</button>
                </div>


            </section>
        </div>
    )

}

export default Home;