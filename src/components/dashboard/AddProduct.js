import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductForm from "../common/ProductForm";

function AddProduct() {
    const productState = {
        product_category: "",
        product_brand: "",
        quntity: "",
        main_price: "",
        description: "",
        discount_percentage: ""
    };
    const [product, setProduct] = useState(productState);

    const changeHandeler = (name, value) => {
        setProduct({...product, [name]: value});
    };

    const submitForm = (e) => {
        e.preventDefault();

        const products = JSON.parse(localStorage.getItem("products")) || [];
        let goods = product;
        goods.id = uuidv4();

        products.push(goods);

        localStorage.setItem("products", JSON.stringify(products));
    }

    return (
        <Fragment>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Add Product</h1>
            </div>

            <div className="add-product-form card shadow mb-4 p-5">
                <ProductForm context="add-product" 
                changeHandeler={changeHandeler}
                submitHandeler={submitForm}></ProductForm>
            </div>            
        </Fragment>
    )
}

export default AddProduct
