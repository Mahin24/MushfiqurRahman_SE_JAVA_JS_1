import React, { Fragment } from 'react'

function productForm(props) {
    const {context, product, changeHandeler, submitHandeler} = props;

    const chnageDetails = (e) => {
        let name = e.target.name,
            value = e.target.value;
            changeHandeler(name, value);
    }

    return (
        <Fragment>
            <form onSubmit={submitHandeler}>
                <div className="row">
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="exampleFormControlSelect1" >Product Category</label>
                            <select class="form-control" value={product?.product_category} name="product_category" onChange={chnageDetails}>
                                <option value="RAM">RAM</option>
                                <option value="MOTHERBOARD">MOTHERBOARD</option>
                                <option value="GRAPHICS CARD">GRAPHICS CARD</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="formGroupExampleInput">Product Brand</label>
                            <input type="text" value={product?.product_brand} name="product_brand" onChange={chnageDetails} class="form-control" placeholder="Product Brand"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="formGroupExampleInput">Stock Quntity</label>
                            <input type="number" value={product?.quntity} name="quntity" onChange={chnageDetails} class="form-control" placeholder="Stock quntity"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="formGroupExampleInput">Main Price</label>
                            <input type="number" value={product?.main_price}  name="main_price" onChange={chnageDetails}  class="form-control" placeholder="Main Price"/>
                        </div>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="formGroupExampleInput">Product Description</label>
                            <textarea class="form-control" value={product?.description}  name="description" onChange={chnageDetails} placeholder="Product Description"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="formGroupExampleInput">Discount Percentage</label>
                            <input type="text" name="discount_percentage" value={product?.discount_percentage}  onChange={chnageDetails} class="form-control" placeholder="Discount Price"/>
                        </div>
                    </div>
                </div>

                <button type="submite" className="btn btn-success float-right">
                    {context === "edit-product" ? "Update" : "Save"}
                </button>
            </form>
        </Fragment>
    )
}

export default productForm
