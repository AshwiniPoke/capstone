import React, { useState, useEffect } from 'react';
import Banner from '../../Layout/Banner/banner';
import Card from '../card';
import Filters from '../filter';

const Product = () => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState(data);
    const [products, setProducts] = useState([]);

    // const sortLowToHigh = (filter) => {
    //     console.log("onfilter", filter);
    //     if (filter) {
    //         const result = data.sort((a, b) => a.price - b.price);
    //         return setSort(result);
    //     }
    //     else {
    //         const result = data;
    //         return setSort(result);
    //     }
    // }

    const sortProductLTH = () => {
        let sortedData = products?.sort((a, b) => (a.price > b.price ? 1 : -1));

        setSort(sortedData);
    }
    const sortProductHTL = () => {
        let sortedData = products?.sort((a, b) => (a.price < b.price ? 1 : -1));

        setSort(sortedData);
    }

    const sortProduct = (event) => {
        console.log(event.target.value);
        if (event.target.value === "lowtohigh") {
            sortProductLTH();
        } else if (event.target.value === "hightolow") {
            sortProductHTL();
        }
    }


    const getProdData = () => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data);
                setLoading(false);
                setProducts(data);
            })
        console.log(data)
    }

    useEffect(() => {
        getProdData()
    }, []);

    const filterProduct = (cat) => {
        console.log(cat.category);
        const updatedList = products.filter((x) => x.category === cat.category);
        console.log("men's clothing", updatedList);
        setData(updatedList);

    }

    return (
        <>
            <div className="container aem-Grid aem-Grid--12">
                <Banner />
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn aem-GridColumn--phone--hide filters">
                    < Filters filterProduct={filterProduct} />
                </div>
                <div className=" aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                    {
                        loading ? <h1 style={{ fontSize: "62px" }}>Loading...</h1> :
                            <>
                                <div className='aem-Grid aem-Grid--12 phoneFilters aem-Grid--default--hide'>
                                    <img src={require('../../Images/sliders.svg').default} alt='icon' /> <span>Filter results</span>&nbsp;&nbsp;&nbsp;
                                    <img src={require('../../Images/arrow-up.svg').default} alt='icon' />
                                    <img src={require('../../Images/arrow-down.svg').default} alt='icon' /> <span>Sort products</span>

                                </div>
                                <div className='aem-Grid aem-Grid--12'>
                                    <p className='resultcount'>{data.length} Results
                                        <span>
                                            <select className='sortBy' aria-label="Default select example" defaultValue={'DEFAULT'} onChange={sortProduct}>
                                                <option value="DEFAULT">Sort by Latest</option>
                                                <option value="lowtohigh">Low to High</option>
                                                <option value="hightolow"> High to Low</option>

                                            </select>
                                        </span></p>
                                </div>


                                <div className='aem-Grid aem-Grid--12'>
                                    <Card data={data} loading={loading} ></Card>
                                </div>
                            </>}
                </div>
            </div>
        </>
    )
}

export default Product;