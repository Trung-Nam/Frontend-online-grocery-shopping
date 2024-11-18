import { useState } from 'react'
import './ProductDetails.scss';
import { Rating } from '@mui/material';
import Slider from 'react-slick/lib/slider';
import { FaCheck, FaRegHeart } from 'react-icons/fa6';
import { CgArrowsExchangeV } from 'react-icons/cg';
import { RiArrowRightSLine } from 'react-icons/ri';
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import CustomTabs from '../Tabs/CustomTabs';
import QuickViewProduct from '../QuickViewProduct/QuickViewProduct';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SliderItem from '../SliderItem/SliderItem';
import { useLoaderData } from 'react-router-dom';
import formatDate from '../../../utils/formatters';


const ProductDetails = () => {
    const product = useLoaderData().data;
    console.log(product);

    const [nav1, setNav1] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [nav2, setNav2] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);

    const handleRatingChange = (rate) => {
        setRating(rate);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to an API)
        console.log({ rating, review, name, email, saveInfo });
    };

    const images = [
        product?.images?.primary,
        ...(product?.images?.thumbnails || [])
    ];

    const tabData = [
        {
            label: "Description",
            content: (
                <div className="tab-content">
                    <p className="tab-paragraph">Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p>
                    <p className="tab-paragraph">Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.</p>
                </div>
            ),
        },
        {
            label: "Additional information",
            content: (
                <div className="tab-content">
                    <table className="table table-bordered">
                        <tr>
                            <td className="border text-center p-2">Brands</td>
                            <td className="border text-center p-2">{"Welch's"}</td>
                        </tr>
                    </table>

                </div>
            ),
        },
        {
            label: "Reviews (1)",
            content: (
                <div className="tab-content">
                    <div id="reviews">
                        <h2 className="reviews-title">
                            1 review for <span>All Natural Italian-Style Chicken Meatballs</span>
                        </h2>

                        <ol className="comment-lists">
                            <li className="comment">
                                <img alt="" src="https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=60&amp;d=mm&amp;r=g" className="avatar avatar-60 photo" height="60" width="60" decoding="async" />
                                <div className="comment-text">
                                    <Rating name="read-only" value={4} readOnly className='star-rating' />
                                    <p className="meta">
                                        <strong className="review__author">Admin </strong>
                                        <span className="review__dash">–</span> <time className="review__published-date">May 1, 2021</time>
                                        <div className="description">
                                            <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                        </div>
                                    </p>
                                </div>
                            </li>
                            <li className="comment">
                                <img alt="" src="https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=60&amp;d=mm&amp;r=g" className="avatar avatar-60 photo" height="60" width="60" decoding="async" />
                                <div className="comment-text">
                                    <Rating name="read-only" value={4} readOnly className='star-rating' />
                                    <p className="meta">
                                        <strong className="review__author">Nguyen Van A </strong>
                                        <span className="review__dash">–</span> <time className="review__published-date">May 1, 2021</time>
                                        <div className="description">
                                            <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                        </div>
                                    </p>
                                </div>
                            </li>

                        </ol>

                        <div className="comment-respond mt-5">
                            <h3 className="comment-reply-title">Add a review</h3>
                            <p className='comment-notes'>Your email address will not be published. Required fields are marked *</p>
                            <form onSubmit={handleSubmit}>
                                <div className="comment-form-rating mb-3">
                                    <label className="form-label">Your rating *</label>
                                    <div className="rating-stars">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                onClick={() => handleRatingChange(star)}
                                                style={{ cursor: 'pointer', color: rating >= star ? '#f39c12' : '#ddd' }}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Your review *</label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Write your review here..."
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Name *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="saveInfo"
                                        checked={saveInfo}
                                        onChange={() => setSaveInfo(!saveInfo)}
                                    />
                                    <label className="form-check-label" htmlFor="saveInfo">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-custom">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const mainSliderSettings = {
        arrows: false,
        asNavFor: nav2,
        ref: (slider) => setNav1(slider),
    };

    const thumbnailSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: nav1, 
        focusOnSelect: true,
        centerMode: true,
        arrows: false,
        dots: true,
        centerPadding: '0px',
    };


    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };


    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const CustomPrevArrow = (props) => {
        // eslint-disable-next-line react/prop-types
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 0px 5px rgba(0, 0, 0, .2)',
                    cursor: 'pointer',
                    zIndex: '1',
                }}
                onClick={onClick}
            >
                <IoIosArrowBack style={{ fontSize: '24px', color: 'black', marginRight: '4px' }} />
            </div>
        );
    }

    const CustomNextArrow = (props) => {
        // eslint-disable-next-line react/prop-types
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 0px 5px rgba(0, 0, 0, .2)',
                    cursor: 'pointer',
                }}
                onClick={onClick}
            >
                <IoIosArrowForward style={{ fontSize: '24px', color: 'black', marginLeft: '4px' }} />
            </div>
        );
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };



    return (
        <div className="product__details-wrapper">
            <div className="container">
                <nav className="breadcrumb">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <RiArrowRightSLine />
                        <li>Product Details</li>
                        <RiArrowRightSLine />
                        <li>Product Details 1</li>
                    </ul>
                </nav>

                <div className="product__details">
                    <article className="product">
                        <div className="product-header">
                            <h1 className="product_title entry-title">{product?.name}</h1>
                            <div className="product-meta">
                                <div className="product-brand">
                                    <table className="product-attributes shop_attributes" aria-label="Product Details">
                                        <tbody>
                                            <tr className="product-attributes-item">
                                                <th className="product-attributes-item__label" scope="row">Brands:</th>
                                                <td className="product-attributes-item__value">
                                                    <p> {product?.brand}</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="product-rating">
                                    <div className="product-rating">
                                        <Rating name="read-only" value={4} readOnly className='star-rating' />
                                        <div className="count-rating">
                                            <a href="#reviews" className="review-link" rel="nofollow">
                                                <span className="count">1</span> review
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="sku-wrapper">
                                    <span>SKU: </span>
                                    <span className="sku">{product?.sku}</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-details-wrapper d-flex">
                            <div className="product-thumbnails col-5">
                                <div className="product-badges">
                                    <span className="badge onsale">{product?.discountPercentage}%</span>
                                    {
                                        product?.recommended && <span className="badge">recommended</span>
                                    }
                                </div>

                                {/* Main Slider */}
                                <Slider {...mainSliderSettings} className="main-slider">
                                    {images.map((image, index) => (
                                        <div key={index}>
                                            <img src={image} alt={`Product ${index}`} className="product-image w-100" />
                                        </div>
                                    ))}
                                </Slider>

                                {/* Thumbnails Slider */}
                                <Slider {...thumbnailSliderSettings} className="thumbnail-slider">
                                    {images.map((image, index) => (
                                        <div key={index} className="thumbnail-wrapper">
                                            <img src={image} alt={`Thumbnail ${index}`} className="thumbnail-image w-100" />
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            <div className="product-detail col-7 d-flex">

                                <div className="product__details-info col-7">
                                    <p className="price">
                                        <del>
                                            <span className="price-amount amount">
                                                <span className="price-currency">$</span>{product?.price}
                                            </span>
                                        </del>

                                        <ins>
                                            <span className="price-amount amount">
                                                <span className="price-currency">$</span>{product?.discountedPrice}
                                            </span>
                                        </ins>

                                    </p>

                                    <div className="product-meta">
                                        <div className={`stock product-available ${product?.stock > 0 ? "in-of-stock" : "out-of-stock"}`}>
                                            <div className={`stock ${product?.stock > 0 ? "in-of-stock" : "out-of-stock"}`}>{product?.stock > 0 ? "In Stock" : "Out Stock"}</div>
                                        </div>
                                    </div>

                                    <div className="product-short-description">
                                        <p>
                                            {product?.description}
                                        </p>
                                    </div>

                                    <div className="add-to-cart-container">
                                        <button className="quantity-button" onClick={handleDecrease}>-</button>
                                        <span className="quantity-display">{quantity}</span>
                                        <button className="quantity-button" onClick={handleIncrease}>+</button>
                                        <button className="add-to-cart-button" onClick={() => alert(`Added ${quantity} item(s) to the cart`)}>
                                            Add to cart
                                        </button>
                                    </div>

                                    <div className="product-actions">
                                        <div
                                            className="btn-wrapper"
                                        >
                                            <a
                                                role="button"
                                                aria-label="Add to Wishlist"
                                                className="add_to_wishlist_button"
                                                href='/'
                                            >
                                                <FaRegHeart />
                                                <span>Add to Wishlist</span>
                                            </a>
                                        </div>

                                        <a
                                            href='/'
                                            className="compare-btn"
                                        >
                                            <CgArrowsExchangeV size={20} />
                                            Compare
                                        </a>
                                    </div>

                                    <div className="product-checklist">
                                        <ul>
                                            <li><FaCheck /> Type: {product?.attributes?.type}</li>
                                            <li><FaCheck /> MFG: {formatDate(product?.attributes?.manufacturingDate)}</li>
                                            <li><FaCheck /> LIFE: {product?.attributes?.shelfLife} days</li>
                                        </ul>
                                    </div>

                                    <div className="product_meta product-meta-bottom">
                                        <span className="sku_wrapper">
                                            SKU: <span className="sku">{product?.sku}</span>
                                        </span>

                                        <span className="posted_in">
                                            Category: <a href="/" rel="tag">{product?.category?.name}</a>
                                        </span>

                                        <span className="tagged_as">
                                            Tags:
                                            {
                                                product?.tags.map((tag, index) => (
                                                    <a href="/" key={index} rel="tag"> {tag}{index === product?.tags?.length - 1 ? "" : ", "}</a>
                                                ))
                                            }
                                        </span>
                                    </div>

                                    <div className="product-share">
                                        <div className="social-share site-social style-1">
                                            <ul className="social-container">
                                                <li>
                                                    <a
                                                        href="/"
                                                        className="facebook"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img src={"../images/social media/facebook.png"} alt="facebook-icon" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        className="twitter"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img src={"../images/social media/twitter.png"} alt="twitter-icon" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        className="pinterest"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img src={"../images/social media/pinterest.png"} alt="pinterest-icon" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        className="linkedin"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img src={"..//images/social media/linkedin.png"} alt="linkedin-icon" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        className="reddit"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img src={"..//images/social media/reddit.png"} alt="reddit-icon" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        className="whatsapp"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img src={"..//images/social media/whatsapp.png"} alt="whatsapp-icon" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div className="product-icons col-5">
                                    <div className="alert-message">Covid-19 Info: We keep delivering.</div>
                                    <div className="icon-messages">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <TbTruckDelivery />
                                                </div>
                                                <div className="message">Free Shipping applies to all orders over $100</div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <IoFastFoodOutline />
                                                </div>
                                                <div className="message">Guaranteed 100% Organic from natural farms</div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <AiOutlineDollarCircle />
                                                </div>
                                                <div className="message">1 Day Returns if you change your mind</div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="tabs__wrapper">
                    <CustomTabs tabs={tabData} />
                </div>
                <div className="related-products-wrapper">
                    <div className="module-header">
                        <h4 className="entry-title">Related products</h4>
                        <div className="entry-description">Products you may also interested.</div>
                    </div>
                    <div className="related-products border rounded">
                        <Slider {...settings}>
                            <SliderItem />
                            <SliderItem />
                            <SliderItem />
                            <SliderItem />
                        </Slider>
                        <QuickViewProduct />
                    </div>
                </div>
                <div className="viewed-products-wrapper">
                    <div className="module-header">
                        <h4 className="entry-title">Recently Viewed Products</h4>
                        <div className="entry-description">Products you interested.</div>
                    </div>
                    <div className="related-products border rounded">
                        <Slider {...settings}>
                            <SliderItem />
                            <SliderItem />
                            <SliderItem />
                            <SliderItem />
                        </Slider>
                        <QuickViewProduct />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails