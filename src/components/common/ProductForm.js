import React, { Fragment } from 'react'

function productForm(props) {
    const {context, changeHandeler, submitHandeler} = props;

    const chnageDetails = (e) => {
        let name = e.target.name,
            value = e.target.value;

            changeHandeler(name, value);

            console.log(name);
            console.log(value);
    }

    return (
        <Fragment>
            <form onSubmit={submitHandeler}>
                <div className="row">
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="exampleFormControlSelect1" >Product Category</label>
                            <select class="form-control" name="product_category" onChange={chnageDetails}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="formGroupExampleInput">Product Brand</label>
                            <input type="text" name="product_brand" onChange={chnageDetails} class="form-control" placeholder="Product Brand"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="formGroupExampleInput">Stock Quntity</label>
                            <input type="text" name="quntity" onChange={chnageDetails} class="form-control" placeholder="Stock quntity"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="formGroupExampleInput">Main Price</label>
                            <input type="text" name="main_price" onChange={chnageDetails}  class="form-control" placeholder="Main Price"/>
                        </div>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="formGroupExampleInput">Product Description</label>
                            <textarea class="form-control" name="description" onChange={chnageDetails} placeholder="Product Description"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group">
                            <label htmlFor="formGroupExampleInput">Discount Percentage</label>
                            <input type="text" name="discount_percentage" onChange={chnageDetails} class="form-control" placeholder="Discount Price"/>
                        </div>
                    </div>
                </div>

                <button type="submite" className="btn btn-success float-right">Save</button>
            </form>
        </Fragment>
    )
}

export default productForm
