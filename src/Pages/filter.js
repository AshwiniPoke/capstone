import React, { useState } from 'react';
import '../sass/main.css';
import { useEffect } from 'react';

const Filters = ({ filterProduct }) => {
    const [data, setData] = useState([]);
    const [isSelected, setisSelected] = useState(false);

    const getCategoryData = () => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data);

            })
        console.log(data)
    }

    useEffect(() => {
        getCategoryData()
    }, []);

    return (
        <>
            <div className='Filter'>
                <p className='filtertext'>Clothing/ Woman's/ Outerwear</p>
                <h3>Filters</h3>
                <hr />
              <b>Categories</b>

                 {data.map((category) => {
                    return (
                        <>
                            <div >
                    <input type="checkbox" id='chk1-label' aria-label="checkbox" onClick={() => {
                        setisSelected(!isSelected);
                        filterProduct({category})
                    }} />
                    <label htmlFor="chk1-label"> {category}</label><br />
                   
                </div>


                        </>
                    )
                })} 

                {/* <div className='Attribute-first'>
                    <h4>Categories</h4>
                    <input type="checkbox" id='chk1-label' aria-label="checkbox" onClick={() => {
                        setisSelected(!isSelected);
                        filterProduct("jewelery")
                    }} />
                    <label htmlFor="chk1-label"> Jewellery</label><br />
                    <input type="checkbox" id='chk2-label' aria-label="checkbox" onClick={() => {
                        setisSelected(!isSelected);
                        filterProduct("electronics")
                    }} />
                    <label htmlFor="chk2-label">  Electronics</label><br />
                    <input type="checkbox" id='chk3-label' aria-label="checkbox" onClick={() => {
                        setisSelected(!isSelected);
                        filterProduct("men's clothing")
                    }} />
                    <label htmlFor='chk3-label'>  Men’s Clothing</label><br />
                    <input type="checkbox" id='chk4-label' aria-label="checkbox" onClick={() => {
                        setisSelected(!isSelected);
                        filterProduct("women's clothing")
                    }} />
                    <label htmlFor='chk4-label'>Women’s Clothing</label><br />
                </div> */}

                <hr />

            </div>
        </>
    )
}

export default Filters;