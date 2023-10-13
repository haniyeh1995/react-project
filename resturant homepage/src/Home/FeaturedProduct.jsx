import PropTypes from 'prop-types'

function FeaturedProduct(prop) {
    const product = prop.product;

    return (
        <>
            <div className="featured-product-card">
                <img src={product.img} alt="" />
                <h2>{product.title}</h2>
                <h3>{product.description}</h3>
                <h4>{product.price}</h4>

                <div className="product-actions">
                    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                        <g filter="url(#filter0_d_0_351)">
                            <circle cx="46" cy="46" r="21" fill="black" />
                        </g>
                        <path d="M39.5834 46H52.4167" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M46 39.5834L52.4167 46L46 52.4167" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <filter id="filter0_d_0_351" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="12.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.5125 0 0 0 0 0.649 0 0 0 0 1 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_351" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_351" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                        <g filter="url(#filter0_d_0_361)">
                            <circle cx="21" cy="21" r="21" transform="matrix(-1 0 0 1 67 25)" fill="white" />
                        </g>
                        <path d="M52.4166 46H39.5833" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M46 39.5834L39.5833 46L46 52.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <filter id="filter0_d_0_361" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="12.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.5125 0 0 0 0 0.649 0 0 0 0 1 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_361" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_361" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="featured-product-background"></div>
            </div>
        </>
    )}

FeaturedProduct.propTypes = {
  product:PropTypes.object.isRequired,
}

export default FeaturedProduct