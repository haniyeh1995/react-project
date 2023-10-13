import PropTypes from 'prop-types'

function Product(props) {
    const product = props.product
    return (
        <>
            <div className="product-card">
                <img src={product.img} alt="" />
                <div className="product-row">
                    <h5>{product.title}</h5>
                    <div className='rating'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                            <path d="M7 1L8.854 4.6204L13 5.20452L10 8.02103L10.708 12L7 10.1204L3.292 12L4 8.02103L1 5.20452L5.146 4.6204L7 1Z" fill="#F48E28" stroke="#F48E28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>
                            {product.rate}
                        </span>
                    </div>
                </div>
                <div className="productcard-row">
                    <button>Add To Cart</button>
                    <p>{product.price}</p>
                </div>
            </div>
        </>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
}
export default Product