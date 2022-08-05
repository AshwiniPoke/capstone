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

               <hr />

            </div>
        </>
    )
}

export default Filters;