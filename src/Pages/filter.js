import React, { useState } from 'react';
import '../sass/main.css';
import { useEffect } from 'react';

const Filters = () => {
    const [data, setData] = useState([]);

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
                            <p className="checkbox" ><input type="checkbox" ></input><span>{category}</span></p>
                        </>
                    )
                })}
               
                <hr />
                
            </div>
        </>
    )
}

export default Filters;