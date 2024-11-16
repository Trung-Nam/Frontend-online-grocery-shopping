import './Product.scss'
import { FaRegHeart } from 'react-icons/fa6'
import { Rating } from '@mui/material'
const Product = () => {
    return (
        <div className="product-wrapper col-3">
            <div className="thumbnail-wrapper">
                <div className="product-badges">
                    <span className="badge on-sale">26%</span>
                    <span className="badge recommended">recommended</span>
                </div>
                <a href="/">
                    <img
                        decoding="async"
                        src={'../images/product-image.jpg'}
                        alt="Weather's Original Caramel Hard Candies"
                        className='w-100'
                    />
                </a>
                <div className="product-buttons">
                    <a href="/" className="detail-btn quick-view-button shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z" />
                        </svg>
                    </a>

                    <a href='/' className='like-btn shadow'>
                        <FaRegHeart />
                    </a>

                </div>
            </div>

            <div className="content-wrapper">
                <h3 className="product-title">
                    <a href="/" title="Weather's Original Caramel Hard Candies">Werther’s Original Caramel Hard Candies</a>
                </h3>
                <div className="product-meta">
                    <div className="product-available in-stock">In Stock</div>
                </div>

                <div className="product-rating">
                    <Rating name="read-only" value={5} readOnly className='star-rating' />
                    <span className="count-rating">10</span>
                </div>

                <span className="price">
                    <del>
                        <span className="price-amount">
                            <bdi>
                                <span className="price-amount-number">$</span>20.00
                            </bdi>
                        </span>
                    </del>
                    <ins>
                        <span className="price-amount">
                            <bdi>
                                <span className="price-amount-number">$</span>14.97
                            </bdi>
                        </span>
                    </ins>
                </span>

                <div className="product-button-group w-100">
                    <a href="/">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default Product