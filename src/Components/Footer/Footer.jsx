import './Footer.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { IoFastFoodOutline } from 'react-icons/io5'
import { TbTruckDelivery } from 'react-icons/tb'
import { RiDiscountPercentLine } from 'react-icons/ri'
import { AiOutlineDollar } from 'react-icons/ai'
import { PiPhoneCallLight } from "react-icons/pi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="subscribe-content">
                                <h6 className="entry-subtitle">$20 discount for your first order</h6>
                                <h3 className="entry-title">Join our newsletter and get...</h3>
                                <div className="entry-teaser">
                                    <p>Join our email subscription now to get updates on promotions and coupons.</p>
                                </div>

                                <div className="form-wrapper">
                                    <form className="d-flex justify-content-center align-items-center">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <MdOutlineEmail size={24} />
                                            </span>
                                            <input
                                                type="email"
                                                className="subscribe-input"
                                                placeholder="Your email address"
                                                aria-label="Email"
                                                required
                                            />
                                            <button className="btn" type="submit">
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-7">
                            <div className="subscribe-image">
                                <img
                                    src={'../../assets/images/coupon.png'}
                                    alt="subscribe"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-icon-boxes border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 border-end">
                            <div className="icon-box">
                                <div className="icon-box-icon">
                                    <IoFastFoodOutline />
                                </div>
                                <div className="icon-box-detail">
                                    <span>Everyday fresh products</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 border-end">
                            <div className="icon-box">
                                <div className="icon-box-icon">
                                    <TbTruckDelivery />
                                </div>
                                <div className="icon-box-detail">
                                    <span>Free delivery for order over $70</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 border-end">
                            <div className="icon-box">
                                <div className="icon-box-icon">
                                    <RiDiscountPercentLine />
                                </div>
                                <div className="icon-box-detail">
                                    <span>Daily Mega Discounts</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="icon-box">
                                <div className="icon-box-icon">
                                    <AiOutlineDollar />
                                </div>
                                <div className="icon-box-detail">
                                    <span>Best price on the market</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-widgets">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col col-12 col-lg-2">
                            <div className="widget_nav_menu">
                                <h4 className="widget-title">FRUIT &amp; VEGETABLES</h4>
                                <div className="menu-fruits-and-vegetables-container">
                                    <ul id="menu-fruits-and-vegetables" className="menu">
                                        <li className="menu-item">
                                            <a href='/'>Fresh Vegetables</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href='/'>Herbs &amp; Seasonings</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href='/'>Fresh Fruits</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href='/'>Cuts &amp; Sprouts</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href='/'>Exotic Fruits &amp; Veggies</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href='/'>Packaged Produce</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href='/'>Party Trays</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col col-12 col-lg-2">
                            <div className="widget widget_nav_menu">
                                <h4 className="widget-title">Breakfast &amp; Dairy</h4>
                                <div className="menu-breakfast-dairy-container">
                                    <ul id="menu-breakfast-dairy" className="menu">
                                        <li id="menu-item-1807" className="menu-item">
                                            <a href="/">Milk &amp; Flavoured Milk</a>
                                        </li>
                                        <li id="menu-item-1802" className="menu-item">
                                            <a href="/">Butter and Margarine</a>
                                        </li>
                                        <li id="menu-item-1803" className="menu-item">
                                            <a href="/">Cheese</a>
                                        </li>
                                        <li id="menu-item-1804" className="menu-item">
                                            <a href="/">Eggs Substitutes</a>
                                        </li>
                                        <li id="menu-item-1805" className="menu-item">
                                            <a href="/">Honey</a>
                                        </li>
                                        <li id="menu-item-1806" className="menu-item">
                                            <a href="/">Marmalades</a>
                                        </li>
                                        <li id="menu-item-1808" className="menu-item">
                                            <a href="/">Sour Cream and Dips</a>
                                        </li>
                                        <li id="menu-item-1809" className="menu-item">
                                            <a href="/">Yogurt</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-12 col-lg-2">
                            <div className="widget widget_nav_menu">
                                <h4 className="widget-title">Meat &amp; Seafood</h4>
                                <div className="menu-meat-seafood-container">
                                    <ul id="menu-meat-seafood" className="menu">
                                        <li className="menu-item">
                                            <a href="/">Breakfast Sausage</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Dinner Sausage</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Beef</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Chicken</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Sliced Deli Meat</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Shrimp</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Wild Caught Fillets</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Crab and Shellfish</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Farm Raised Fillets</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-12 col-lg-2">
                            <div className="widget widget_nav_menu">
                                <h4 className="widget-title">Beverages</h4>
                                <div className="menu-beverages-container">
                                    <ul id="menu-beverages" className="menu">
                                        <li className="menu-item">
                                            <a href="/">Water</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Sparkling Water</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Soda &amp; Pop</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Coffee</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Milk &amp; Plant-Based Milk</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Tea &amp; Kombucha</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Drink Boxes &amp; Pouches</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Craft Beer</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Wine</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-12 col-lg-2">
                            <div className="widget widget_nav_menu">
                                <h4 className="widget-title">Breads &amp; Bakery</h4>
                                <div className="menu-breakfast-dairy-container">
                                    <ul id="menu-breakfast-dairy-1" className="menu">
                                        <li className="menu-item">
                                            <a href="/">Milk &amp; Flavoured Milk</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Butter and Margarine</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Cheese</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Eggs Substitutes</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Honey</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Marmalades</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Sour Cream and Dips</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/">Yogurt</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-contacts">
                <div className="container d-flex">
                    <div className="col-lg-5 column-left">
                        <div className="site-phone">
                            <div className="phone-icon">
                                <PiPhoneCallLight />
                            </div>
                            <div className="phone-detail">
                                <h4 className="entry-title">8 800 555-55</h4>
                                <span>Working 8:00 - 22:00</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 column-right">
                        <div className="site-mobile-app">
                            <div className="app-content">
                                <h6 className="entry-title">Download App on Mobile:</h6>
                                <span>15% discount on your first purchase</span>
                            </div>
                            <div className="app-buttons">
                                <a href="/" className="google-play">
                                    <img src={'../../assets/images/google-play.jpg'} alt="app" />
                                </a>
                                <a href="/" className="google-play">
                                    <img src={'../../assets/images/app-store.jpg'} alt="app" />
                                </a>
                            </div>
                        </div>

                        <div className="site-social">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container border-top d-flex justify-content-between">
                    <div className="site-copyright">
                        <p>Copyright 2024 © Trung Nam. All rights reserved. Powered by me.</p>
                    </div>

                    <nav className="site-menu footer-menu">
                        <ul id="menu-footer-menu" className="menu d-flex justify-content-between">
                            <li className="menu-item">
                                <a rel="privacy-policy" href="/">Privacy Policy</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">Terms and Conditions</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">Cookie</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="site-payments">
                        <a href="/">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/payments.jpg" alt="payment" />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer