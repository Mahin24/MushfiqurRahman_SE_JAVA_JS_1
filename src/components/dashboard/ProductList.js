import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";

function ProductList() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const [selectedItem, setSelectedItem] = useState("")

    const deleteItem = () => {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const id = selectedItem.id;

        let index = products.findIndex(p => p.id === id);

        if (index !== -1) {
            products.splice(index, 1);
            localStorage.setItem("products", JSON.stringify(products));

            window.location = "/admin/product";
        };
    }

    return (
        <Fragment>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Products</h1>
            </div>

            <div className="add-product-form card shadow mb-4 p-5">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Stock Quntity</th>
                            <th scope="col">Main Price</th>
                            <th scope="col">Discount Percentage</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.length ? 
                            products.map((data,i) => {
                                return <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{data.product_category}</td>
                                    <td>{data.product_brand}</td>
                                    <td>{data.quntity}</td>
                                    <td>{data.main_price}</td>
                                    <td>{data.discount_percentage}</td>
                                    <td>{data.description}</td>
                                    <td>
                                        <Link className="btn btn-warning mr-2" to={`/admin/edit-product/ ${data.id}`}>Edit</Link>
                                        <button type="button" class="btn btn-danger" onClick={() => {setSelectedItem(data)}}
                                        data-toggle="modal" data-target="#exampleModal">Delete</button>
                                    </td>
                                </tr>
                            }) : ""}
                    </tbody>
                </table>
            </div> 
            

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete this item.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={deleteItem}>yes</button>
                    </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}

export default ProductList
