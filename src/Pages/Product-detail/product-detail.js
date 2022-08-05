import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../sass/main.css';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { handleAction } from '../../Redux/cartSlice';
import icon1 from '../../Images/detailsIcon1.png';
import icon2 from '../../Images/detailsIcon2.png';
import icon3 from '../../Images/detailsIcon3.png';
import icon4 from '../../Images/detailsIcon4.png';
import color from '../../Images/color2.png';
import Carousel from "react-multi-carousel";
import SimpleImageSlider from "react-simple-image-slider";
import ImageGallery from 'react-image-gallery';
import SimpleSlider from './image-slider';

const ProductDetail = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    const { id } = useParams();

    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => setProduct(data));
    // }, []);
    // console.log(data);

    const getProducts = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setData(data);
        setLoading(false);
        console.log(data);
    }

    useEffect(() => {
        getProducts();
    }, [id]);

    const dispatch = useDispatch();
    const addProduct = (data) => {
        dispatch(handleAction.addItem({ ...data }));
        localStorage.setItem("cartProdData", JSON.stringify(data));
        console.log(data);
        // alert("Item added to cart");
    }
    let title = data.title;
    let splitTitle = title?.split(' ').slice(0, 3).join(' ')

    const images = [
        { url: data.image },
        { url: data.image },
        { url: data.image },
        { url: data.image },
        { url: data.image }

    ];

    return (
        <div className='productDetailContainer'>
            <div className='container aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                    <div className='aem-Grid aem-Grid--12 '>
                        <div className='aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--hide aem-GridColumn--phone--hide'>
                            <img src={data.image} className="sideImg" alt="side"></img>
                            <img src={data.image} className="sideImg" alt="side"></img>
                            <img src={data.image} className="sideImg" alt="side"></img>
                            <img src={data.image} className="sideImg" alt="side"></img>
                            <img src={data.image} className="sideImg" alt="side"></img>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--hide aem-GridColumn--tablet--6'>
                            <img src={data.image} className="mainImg" alt="main"></img></div>
                        <div className='aem-GridColumn aem-GridColumn--phone--12 imgSliderPhone'>
                            <SimpleSlider data={data}/>
                            {/* <SimpleImageSlider
                                width={350}
                                height={380}
                                images={images}
                                showBullets={true}
                                showNavs={false}
                            /> */}
                        </div>
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 prodDetails '>
                    <p>Clothing/ Woman's/ Outerwear</p>
                    <p className='SingleProdTitle'>{splitTitle}</p>
                    <p>${data.price}</p>
                    {/* <p>{data.rating.rate}</p> */}
                    <p><small>{data.description}<span className='ReadMore'> Read more</span></small></p>
                    <hr />
                    {/* <p><b>Color</b></p>
                    <img src={color} alt="colorpallet" />
                    <p><b>Size</b></p>
                    <button className='sizeOptions' aria-label='SizeXS'><small>XS</small></button>
                    <button className='sizeOptions' aria-label='SizeS'><small>S</small></button>
                    <button className='sizeOptions' aria-label='SizeM'><small>M</small></button>
                    <button className='sizeOptions' aria-label='SizeL'><small>L</small></button>
                    <button className='sizeOptions' aria-label='SizeXL'><small>XL</small></button> */}
                    <p><b>Quantity</b></p>
                    <div> <button className='quantity-minus' aria-label='DecQuantity' onClick={decNum}> - </button>
                        <input type="text" className='quantity' value={num} onChange={handleChange} aria-label="quantity" />
                        <button className='quantity-plus' aria-label='IncQuantity' onClick={incNum}> + </button></div>
<br />
                    <button className='AddToCartBtn' aria-label='AddToCart' onClick={() => addProduct(data)}>ADD TO CART</button>
                    <p className='saveShareBtn'><span><img src={require('../../Images/heart.svg').default} alt='icon' /> save</span>&nbsp;&nbsp;
                        <span><img src={require('../../Images/share.svg').default} alt='icon' /> share</span></p>

                </div>
            </div>
            <div className='aem-Grid aem-Grid--12 container'>
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 prodDetails'>
                    <h2>{data.title}</h2>
                    <h4>Description</h4>
                    <p>{data.description}</p>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 prodDetails'>
                    <h4>Details</h4>
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--6 '>
                            <p><img src={icon1} alt="icon1" />Sweat-wicking</p>
                            <p><img src={icon3} alt="icon3" />Light-weight fabric</p>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 '>
                            <p><img src={icon2} alt="icon2" />Breathable</p>
                            <p><img src={icon4} alt="icon4" />69% nylon, 31% lycra</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}


export default ProductDetail;