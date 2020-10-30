import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from "../common/ProductForm";

function EditProduct() {
    const [productState, setProductState] = useState();
    const [product, setProduct] = useState(productState);
    const { productId } = useParams();


    const changeHandeler = (name, value) => {
        setProduct({...product, [name]: value});
        setProductState({...productState, [name]: value});
    };

    const submitForm = (e) => {
        e.preventDefault();
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const id = productId.trim();

        let index = products.findIndex(p => p.id === id);

        if (index !== -1) {
            products.splice(index, 1);
            products.push(productState);
            localStorage.setItem("products", JSON.stringify(products));

            window.location = "/admin/product";
        };

    }


    useEffect(() => {
        let products = JSON.parse(localStorage.getItem("products")) || [],
            id = productId.trim();

        if (products && products.length) {
            let pro = products.find(p => p.id === id);
            setProductState(pro);
        }
    }, []);

    return (
        <Fragment>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Edit Product</h1>
            </div>

            <div className="add-product-form card shadow mb-4 p-5">
                <ProductForm context="edit-product"
                product={productState}
                changeHandeler={changeHandeler}
                submitHandeler={submitForm}></ProductForm>
            </div>
        </Fragment>
    )
}

export default EditProduct
