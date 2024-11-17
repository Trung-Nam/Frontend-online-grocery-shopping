import Carousel from '../../Components/Header/Carousel/Carousel'
import './Home.scss'
import Slider from 'react-slick'
import { FaArrowRightLong, FaListCheck } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { RiMobileDownloadLine } from 'react-icons/ri'
import { LuClock3 } from 'react-icons/lu'
import SliderItem from '../../Components/Product/SliderItem/SliderItem'
import Product from '../../Components/Product/Product/Product'
import { Container, Row, Col } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts'
import QuickViewProduct from '../../Components/Product/QuickViewProduct/QuickViewProduct'
import { useState } from 'react'
import { Modal } from 'bootstrap';

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [products] = useProducts();
    // console.log(products);



    const handleQuickView = (product) => {
        setSelectedProduct(product);
    
        setTimeout(() => {
            const modalElement = document.getElementById('quick-view-product');
            if (modalElement) {
                const modal = new Modal(modalElement);
                modal.show();
            } else {
                console.error("Modal element not found");
            }
        }, 0);
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
        <>
            <Carousel />
            <section className="container d-flex">
                <div className="col-3 left">
                    <div className="widget-container">
                        <div className="widget widget_text">
                            <div className="widget-body">
                                <div className="module-banner image align-left align-top full-text">
                                    <div className="module-body"><div className="banner-wrapper">
                                        <div className="banner-content"><div className="content-header">
                                            <div className="sub-text color-white">Bacola Natural Foods</div>
                                        </div>
                                            <div className="content-main">
                                                <h4 className="entry-subtitle color-text small xlight">Special Organic</h4>
                                                <h3 className="entry-title color-text">Roats Burger</h3>
                                            </div>
                                            <div className="content-footer d-flex flex-column">
                                                <span className="price-text color-text">only-from</span>
                                                <span className="price color-price">$14.99</span>
                                            </div>
                                        </div>
                                        <div className="banner-thumbnail">
                                            <img decoding="async" src={'/images/widget-1.jpg'} alt="banner" className="rounded-3" />
                                        </div>
                                        <a href="/" className="overlay-link">
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-container">
                        <div className="widget widget_text">
                            <div className="widget-body">
                                <div className="module-banner image align-left align-top full-text">
                                    <div className="module-body">
                                        <div className="banner-wrapper">
                                            <div className="banner-content">
                                                <div className="content-header">
                                                    <div className="sub-text color-white">Best Bakery Products</div>
                                                </div>
                                                <div className="content-main">
                                                    <h4 className="entry-subtitle color-text small xlight">Freshest Products</h4>
                                                    <h3 className="entry-title color-text">every hour.</h3>
                                                </div>
                                                <div className="content-footer d-flex flex-column">
                                                    <span className="price-text color-text">only-from</span>
                                                    <span className="price color-price">$24.99</span>
                                                </div>
                                            </div>
                                            <div className="banner-thumbnail">
                                                <img decoding="async" src={'/images/widget-2.jpg'} alt="banner" className="rounded-3" />
                                            </div>
                                            <a href="/" className="overlay-link">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-container">
                        <div className="widget-body">
                            <div className="icon-boxes-widget border rounded">
                                <div className="item">
                                    <div className="icon">
                                        <RiMobileDownloadLine size={30} />
                                    </div>
                                    <div className="text">Download the Bacola App to your Phone.</div>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                        <FaListCheck size={28} />
                                    </div>
                                    <div className="text">{"Order now so you don't miss the opportunities."}</div>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                        <LuClock3 size={30} />
                                    </div>
                                    <div className="text">Your order will arrive at your door in 15 minutes.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="widget-container">
                        <h4 className="widget-title">Trending Products</h4>
                        <div className="widget-body">
                            <div className="trending-products-list border rounded">
                                <div className="product product-type-simple">
                                    <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                            <a href="/" title="USDA Choice Angus Beef Stew Meat">
                                                <img decoding="async" className="w-100" src={'/images/product-image-3.jpg'} alt="USDA Choice Angus Beef Stew Meat" />
                                            </a>
                                        </div>
                                        <div className="content-wrapper">
                                            <h3 className="product-title">
                                                <a href="/">
                                                    USDA Choice Angus Beef Stew Meat
                                                </a>
                                            </h3>
                                            <div className="product-meta"></div>
                                            <span className="price">
                                                <del aria-hidden="true">
                                                    <span className="trending-product-amount amount">
                                                        <bdi>
                                                            <span className="trending-product-currency">$</span>79.99
                                                        </bdi>
                                                    </span>
                                                </del>

                                                <ins aria-hidden="true">
                                                    <span className="trending-product-amount amount">
                                                        <bdi>
                                                            <span className="trending-product-currency">$</span>49.99
                                                        </bdi>
                                                    </span>
                                                </ins>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product product-type-simple">
                                    <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                            <a href="/" title="USDA Choice Angus Beef Stew Meat">
                                                <img decoding="async" className="w-100" src={'/images/product-image-3.jpg'} alt="USDA Choice Angus Beef Stew Meat" />
                                            </a>
                                        </div>
                                        <div className="content-wrapper">
                                            <h3 className="product-title">
                                                <a href="/">
                                                    USDA Choice Angus Beef Stew Meat
                                                </a>
                                            </h3>
                                            <div className="product-meta"></div>
                                            <span className="price">
                                                <del aria-hidden="true">
                                                    <span className="trending-product-amount amount">
                                                        <bdi>
                                                            <span className="trending-product-currency">$</span>79.99
                                                        </bdi>
                                                    </span>
                                                </del>

                                                <ins aria-hidden="true">
                                                    <span className="trending-product-amount amount">
                                                        <bdi>
                                                            <span className="trending-product-currency">$</span>49.99
                                                        </bdi>
                                                    </span>
                                                </ins>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product product-type-simple">
                                    <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                            <a href="/" title="USDA Choice Angus Beef Stew Meat">
                                                <img decoding="async" className="w-100" src={'/images/product-image-3.jpg'} alt="USDA Choice Angus Beef Stew Meat" />
                                            </a>
                                        </div>
                                        <div className="content-wrapper">
                                            <h3 className="product-title">
                                                <a href="/">
                                                    USDA Choice Angus Beef Stew Meat
                                                </a>
                                            </h3>
                                            <div className="product-meta"></div>
                                            <span className="price">
                                                <del aria-hidden="true">
                                                    <span className="trending-product-amount amount">
                                                        <bdi>
                                                            <span className="trending-product-currency">$</span>79.99
                                                        </bdi>
                                                    </span>
                                                </del>

                                                <ins aria-hidden="true">
                                                    <span className="trending-product-amount amount">
                                                        <bdi>
                                                            <span className="trending-product-currency">$</span>49.99
                                                        </bdi>
                                                    </span>
                                                </ins>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product product-type-simple">
                                    <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                            <a href="/" title="USDA Choice Angus Beef Stew Meat">
                                                <img decoding="async" className="w-100" src={'/images/product-image-3.jpg'} alt="USDA Choice Angus Beef Stew Meat" />
                                            </a>
                                        </div>
                                        <div className="content-wrapper">
                                            <h3 className="product-title">
                                                <a href="/">
                                                    USDA Choice Angus Beef Stew Meat
                                                </a>
                                            </h3>
                                            <div className="product-meta"></div>
                                            <span className="price">
                                                <del aria-hidden="true">
                                                    <span className="trending-product-amount amount">
                                                        <bdi>
                                                            <span className="trending-product-currency">$</span>79.99
                                                        </bdi>
                                                    </span>
                                                </del>

                                                <ins aria-hidden="true">
                                                    <span className="trending-product-amount amount">
                                                        <bdi>
                                                            <span className="trending-product-currency">$</span>49.99
                                                        </bdi>
                                                    </span>
                                                </ins>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product product-type-simple">
                                    <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                            <a href="/" title="USDA Choice Angus Beef Stew Meat">
                                                <img decoding="async" className="w-100" src={'/images/product-image-3.jpg'} alt="USDA Choice Angus Beef Stew Meat" />
                                            </a>
                                        </div>
                                        <div className="content-wrapper">
                                            <h3 className="product-title">
                                                <a href="/">
                                                    USDA Choice Angus Beef Stew Meat
                                                </a>
                                            </h3>
                                            <div className="product-meta"></div>
                                            <span className="price">
                                                <del aria-hidden="true">
                                                    <span className="trending-product-amount amount">
                                                        <bdi>
                                                            <span className="trending-product-currency">$</span>79.99
                                                        </bdi>
                                                    </span>
                                                </del>

                                                <ins aria-hidden="true">
                                                    <span className="trending-product-amount amount">
                                                        <bdi>
                                                            <span className="trending-product-currency">$</span>49.99
                                                        </bdi>
                                                    </span>
                                                </ins>

                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="widget-container">
                        <div className="widget-body">
                            <div className="widget widget_klb_customer">
                                <h4 className="widget-title">Customer Comment</h4>
                                <div className="widget-body">
                                    <div className="customer-comment">
                                        <h4 className="entry-title">The Best Marketplace</h4>
                                        <div className="entry-message">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                        </div>
                                        <div className="customer">
                                            <div className="avatar">
                                                <img decoding="async" className='w-100' src={'/images/avatar.jpg'} alt="testimonial" />
                                            </div>
                                            <div className="detail">
                                                <h3 className="customer-name">Tina Mcdonnell</h3>
                                                <span className="customer-mission">Sales Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9 right">
                    <Container fluid className="module-header p-0">
                        <Row className="w-100 p-0 m-0">
                            <Col xs={6} md={9} className="p-0">
                                <h4 className="entry-title">Best Sellers</h4>
                                <div className="entry-description">
                                    Do not miss the current offers until the end of March.
                                </div>
                            </Col>
                            <Col xs={6} md={3} className="d-flex justify-content-end align-items-center p-0">
                                <a className="view-all-button" href="/">
                                    View All <FaArrowRightLong size={14} style={{ marginLeft: '4px', marginBottom: '2px' }} />
                                </a>
                            </Col>
                        </Row>
                    </Container>

                    <div className="best-sellers-products border rounded">
                        <Slider {...settings}>
                            {products?.slice(0, 4)?.map(product => (
                                <SliderItem
                                    key={product?._id}
                                    product={product}
                                    onQuickView={handleQuickView}
                                />
                            ))}
                        </Slider>
                    </div>

                    <div className="module-body-banner w-100">
                        <div className="banner-wrapper rounded">
                            <div className="banner-content">
                                <h4 className="sub-text color-info-dark">Always Taking Care</h4>
                                <h3 className="entry-title mini color-text-lighter">In store or online your health &amp; safety is our top priority.</h3>
                            </div>
                            <div className="banner-thumbnail">
                                <img decoding="async" src={'/images/banner-box1.jpg'} alt="banner" />
                            </div>
                            {/* <a href="/" className="overlay-link"></a> */}
                        </div>
                    </div>

                    <Container fluid className="module-header p-0">
                        <Row className="w-100 p-0 m-0 d-flex justify-content-center align-items-center">
                            <Col xs={6} md={9} className="p-0">
                                <h4 className="entry-title">
                                    HOT PRODUCT FOR <span className="text-danger">THIS WEEK</span>
                                </h4>
                                <div className="entry-description">
                                    {"Don't miss this opportunity at a special discount just for this week."}
                                </div>
                            </Col>
                            <Col xs={6} md={3} className="d-flex justify-content-end align-items-center p-0">
                                <a className="view-all-button" href="/">
                                    View All <FaArrowRightLong size={14} style={{ marginLeft: '4px', marginBottom: '2px' }} />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                    <div className="hot-product rounded">
                        <div className="product">
                            <div className="hot-sale">19%</div>

                            <div className="hot-product-content d-flex">
                                <div className="thumbnail-wrapper col-3">
                                    <a href="/" title="Chobani Complete Vanilla Greek Yogurt">
                                        <img decoding="async" className='w-100' src={'/images/product-image-2.jpg'} alt="Chobani Complete Vanilla Greek Yogurt" />
                                    </a>
                                </div>

                                <div className="content-wrapper col-9">
                                    <div className="hot-product-header">
                                        <span className="price">
                                            <del aria-hidden="true">
                                                <span className="hot-product-amount">
                                                    <bdi>
                                                        <span className="">$</span>5.49
                                                    </bdi>
                                                </span>
                                            </del>
                                            <ins aria-hidden="true">
                                                <span className="hot-product-amount">
                                                    <bdi>
                                                        <span className="">$</span>4.49
                                                    </bdi>
                                                </span>
                                            </ins>
                                        </span>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="/">Chobani Complete Vanilla Greek Yogurt</a>
                                    </h3>
                                    <div className="product-meta">
                                        <div className="product-unit">1 kg</div>
                                        <div className="product-available in-stock">In Stock</div>
                                    </div>
                                    <div className="product-progress">
                                        <span className="progress" style={{ width: "88%" }}></span>
                                    </div>
                                    <div className="product-expired">
                                        <div className="countdown" data-date="2024/12/13">
                                            <div className="count-item days">69</div>:<div className="count-item hours">03</div>:<div className="count-item minutes">14</div>:<div className="count-item second">59</div>
                                        </div>
                                        <div className="expired-text">Remains until the end of the offer</div>
                                    </div>
                                </div>

                            </div>

                            <a href="/" title="Chobani Complete Vanilla Greek Yogurt" className="overlay-link"></a>
                        </div>
                    </div>

                    <div className="module-purchase-banner">
                        <div className="module-body">
                            <a href="/">
                                <span className="purchase-text">
                                    Super discount for your <strong>first purchase.</strong>
                                </span>
                                <span className="purchase-code">FREE25BAC</span>
                                <span className="purchase-description">Use discount code in checkout!</span>
                            </a>
                        </div>
                    </div>

                    <Container fluid className="module-header p-0">
                        <Row className="w-100 p-0 m-0 d-flex justify-content-center align-items-center">
                            <Col xs={6} md={9} className="p-0">
                                <h4 className="entry-title">NEW PRODUCTS</h4>
                                <div className="entry-description">
                                    New products with updated stocks.
                                </div>
                            </Col>
                            <Col xs={6} md={3} className="d-flex justify-content-end align-items-center p-0">
                                <a className="view-all-button" href="/">
                                    View All <FaArrowRightLong size={14} style={{ marginLeft: '4px', marginBottom: '2px' }} />
                                </a>
                            </Col>
                        </Row>
                    </Container>

                    <div className="products d-flex flex-wrap border rounded">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>

                    <div className="ads-banner d-flex">
                        <div className="col-6">
                            <div className="banner-wrapper">
                                <div className="banner-content">
                                    <div className="content-header">
                                        <div className="discount-text">Weekend Discount 40%</div>
                                    </div>
                                    <div className="content-main">
                                        <h3 className="entry-title color-text-light">Legumes &amp; Cereals</h3>
                                        <div className="entry-text color-info-dark">Feed your family the best</div>
                                    </div>
                                    <a href="/" className="button button-info-dark rounded xsmall">Shop Now</a>
                                </div>
                                <div className="banner-thumbnail">
                                    <img decoding="async" src={'/images/bacola-banner-1.jpg'} alt="banner" />
                                </div>
                            </div>

                        </div>

                        <div className="col-6">
                            <div className="banner-wrapper">
                                <div className="banner-content">
                                    <div className="content-header">
                                        <div className="discount-text">Weekend Discount 40%</div>
                                    </div>
                                    <div className="content-main">
                                        <h3 className="entry-title">Legumes &amp; Cereals</h3>
                                        <div className="entry-text">Feed your family the best</div>
                                    </div>
                                    <a href="/" className="button button-info-dark rounded xsmall">Shop Now</a>
                                </div>
                                <div className="banner-thumbnail">
                                    <img decoding="async" src={'/images/bacola-banner-2.jpg'} alt="banner" />
                                </div>
                            </div>

                        </div>




                    </div>
                </div>
            </section>

            <section className="container module-category">
                <div className="module-body justify-content-center w-100">
                    <div className="categories d-flex w-100">
                        <div className="first col-3">
                            <div className="category">
                                <div className="category-image">
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={'/images/baverages-1.jpg'}
                                            alt="Beverages"
                                            className='w-100'
                                        />
                                    </a>
                                </div>
                                <div className="category-detail">
                                    <h3 className="entry-category">
                                        <a href="/">Beverages</a>
                                    </h3>
                                    <div className="category-count">11 Items</div>
                                </div>
                            </div>
                        </div>

                        <div className="categories-wrapper col-9">
                            <div className="category col-3 border">
                                <div className="category-image">
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={'/images/biscuitssnacks-1.jpg'}
                                            alt="Biscuits & Snacks"
                                        />
                                    </a>
                                </div>
                                <div className="category-detail">
                                    <h3 className="entry-category">
                                        <a href="/">Biscuits & Snacks</a>
                                    </h3>
                                    <div className="category-count">6 Items</div>
                                </div>
                            </div>
                            <div className="category col-3 border">
                                <div className="category-image">
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={'/images/biscuitssnacks-1.jpg'}
                                            alt="Biscuits & Snacks"
                                        />
                                    </a>
                                </div>
                                <div className="category-detail">
                                    <h3 className="entry-category">
                                        <a href="/">Biscuits & Snacks</a>
                                    </h3>
                                    <div className="category-count">6 Items</div>
                                </div>
                            </div>
                            <div className="category col-3 border">
                                <div className="category-image">
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={'/images/biscuitssnacks-1.jpg'}
                                            alt="Biscuits & Snacks"
                                        />
                                    </a>
                                </div>
                                <div className="category-detail">
                                    <h3 className="entry-category">
                                        <a href="/">Biscuits & Snacks</a>
                                    </h3>
                                    <div className="category-count">6 Items</div>
                                </div>
                            </div>
                            <div className="category col-3 border">
                                <div className="category-image">
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={'/images/biscuitssnacks-1.jpg'}
                                            alt="Biscuits & Snacks"
                                        />
                                    </a>
                                </div>
                                <div className="category-detail">
                                    <h3 className="entry-category">
                                        <a href="/">Biscuits & Snacks</a>
                                    </h3>
                                    <div className="category-count">6 Items</div>
                                </div>
                            </div>
                            <div className="category col-3 border">
                                <div className="category-image">
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={'/images/biscuitssnacks-1.jpg'}
                                            alt="Biscuits & Snacks"
                                        />
                                    </a>
                                </div>
                                <div className="category-detail">
                                    <h3 className="entry-category">
                                        <a href="/">Biscuits & Snacks</a>
                                    </h3>
                                    <div className="category-count">6 Items</div>
                                </div>
                            </div>
                            <div className="category col-3 border">
                                <div className="category-image">
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={'/images/biscuitssnacks-1.jpg'}
                                            alt="Biscuits & Snacks"
                                        />
                                    </a>
                                </div>
                                <div className="category-detail">
                                    <h3 className="entry-category">
                                        <a href="/">Biscuits & Snacks</a>
                                    </h3>
                                    <div className="category-count">6 Items</div>
                                </div>
                            </div>
                            <div className="category col-3 border">
                                <div className="category-image">
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={'/images/biscuitssnacks-1.jpg'}
                                            alt="Biscuits & Snacks"
                                        />
                                    </a>
                                </div>
                                <div className="category-detail">
                                    <h3 className="entry-category">
                                        <a href="/">Biscuits & Snacks</a>
                                    </h3>
                                    <div className="category-count">6 Items</div>
                                </div>
                            </div>
                            <div className="category col-3 border">
                                <div className="category-image">
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={'/images/biscuitssnacks-1.jpg'}
                                            alt="Biscuits & Snacks"
                                        />
                                    </a>
                                </div>
                                <div className="category-detail">
                                    <h3 className="entry-category">
                                        <a href="/">Biscuits & Snacks</a>
                                    </h3>
                                    <div className="category-count">6 Items</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <QuickViewProduct product={selectedProduct} />
        </>
    )
}

export default Home