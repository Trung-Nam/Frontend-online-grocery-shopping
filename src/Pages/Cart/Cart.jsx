/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './Cart.scss'
const Cart = () => {
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'All Natural Italian-Style Chicken Meatballs', price: 7.25, quantity: 1, img: '../../assets/images/product-image-2.jpg' },
        { id: 2, name: "Angie's Boomchickapop Sweet & Salty Kettle Corn", price: 3.29, quantity: 1, img: '../../assets/images/product-image-3.jpg' },
        { id: 3, name: 'Field Roast Chao Cheese Creamy Original', price: 19.50, quantity: 1, img: '../../assets/images/product-image-3.jpg' }
    ]);

    const [couponCode, setCouponCode] = useState('');
    const [shippingCost, setShippingCost] = useState(5.00);

    const updateQuantity = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const applyCoupon = () => {
        console.log('Coupon applied:', couponCode);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const calculateTotal = () => {
        return calculateSubtotal() + shippingCost;
    };



    const handleAddressChangeClick = () => {
        setShowAddressForm(!showAddressForm);
    };


    return (
        <div className="cart-wrapper">
            <div className="container">
                {/* When cart is empty */}

                {/* <div className="cart-empty-page">
                    <div className="empty-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 280.028 280.028"
                            width="280.028"
                            height="80.028"
                        >
                            <path
                                className="c-01"
                                d="M35.004 0h210.02v78.758H35.004V0z"
                                fill="#d07c40"
                            ></path>
                            <path
                                className="c-02"
                                d="M262.527 61.256v201.27c0 9.626-7.876 17.502-17.502 17.502H35.004c-9.626 0-17.502-7.876-17.502-17.502V61.256h245.025z"
                                fill="#f4b459"
                            ></path>
                            <path
                                className="c-03"
                                d="M35.004 70.007h26.253V26.253L35.004 0v70.007zm183.767-43.754v43.754h26.253V0l-26.253 26.253z"
                                fill="#f4b459"
                            ></path>
                            <path
                                className="c-04"
                                d="M61.257 61.256V26.253L17.503 61.256h43.754zm157.514-35.003v35.003h43.754l-43.754-35.003z"
                                fill="#e3911c"
                            ></path>
                            <path
                                className="c-05"
                                d="M65.632 105.01c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c0-5.25-3.5-8.751-8.751-8.751zm148.764 0c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c.001-5.25-3.501-8.751-8.751-8.751z"
                                fill="#cf984a"
                            ></path>
                            <path
                                className="c-06"
                                d="M65.632 121.637c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001-.001.874-6.126 6.124-6.126z"
                                fill="#cf984a"
                            ></path>
                            <path
                                className="c-07"
                                d="M65.632 112.886c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001 0 .874-6.126 6.124-6.126z"
                                fill="#fdfbf7"
                            ></path>
                        </svg>
                    </div>
                    <div className="notices-wrapper"></div>
                    <div className="empty-cart-message">
                        <p className="cart-empty info">
                            Your cart is currently empty.
                        </p>
                    </div>
                    <div className="return-to-shop">
                        <a className="btn custom-btn" href="/shop">
                            Return to shop
                        </a>
                    </div>
                </div> */}

                {/* When have items */}

                <div className="cart__content my-5 d-flex">
                    <div className="cart__content-left col-9">
                        {/* Free shipping message and progress bar */}
                        <div className="free-shipping-notice" role="alert">
                            <span>Add <strong>$19.96</strong> to cart and get free shipping!</span>
                            <div className="progress">
                                <div className="progress-bar bg-danger custom-progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        {/* Cart items */}
                        <div className="table-responsive custom-table">
                            <table className="table align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Subtotal</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item => (
                                        <tr key={item.id}>
                                            <td>
                                                <img src={item.img} alt={item.name} className="me-2" style={{ width: '70px', height: '70px' }} />
                                                <a href="/">
                                                    {item.name}
                                                </a>
                                            </td>
                                            <td>${item.price.toFixed(2)}</td>
                                            <td>
                                                <div className="quantity-control d-flex align-items-center">
                                                    <button type="button" onClick={() => updateQuantity(item.id, -1)}>−</button>
                                                    <input type="text" className="form-control" style={{ width: '50px' }} value={item.quantity} readOnly />
                                                    <button type="button" onClick={() => updateQuantity(item.id, 1)}>+</button>
                                                </div>
                                            </td>
                                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                                            <td><button type="button" className="btn btn-sm btn-outline-danger" onClick={() => removeItem(item.id)}>×</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Coupon and remove all buttons */}
                        <div className="form__wrapper d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <input
                                    type="text"
                                    className="form-control d-inline-block"
                                    style={{ width: '200px', height: '44px', }}
                                    placeholder="Coupon code"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                />
                                <button className="btn custom-btn ms-2" onClick={applyCoupon}>Apply coupon</button>
                            </div>
                            <button className="btn custom-btn danger" onClick={() => setCartItems([])}>Remove All</button>
                        </div>
                    </div>
                    <div className="cart__content-right col-3 border rounded">
                        {/* Cart totals */}
                        <div className="cart-totals p-3">
                            <h6>Cart Totals</h6>
                            <table cellSpacing={0} className='shop_table shop_table_responsive w-100'>
                                <tbody>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td data-title="Subtotal" className='text-end'>
                                            <span className="price-amount amount">
                                                <bdi>
                                                    <span className="price-currencySymbol">$</span>30.04
                                                </bdi>
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="shipping-totals shipping">
                                        <th>Shipping</th>
                                        <td data-title="Shipping" className='text-end'>
                                            <ul id="shipping_method" className="shipping-methods">
                                                <li>
                                                    <label htmlFor="shipping_method">
                                                        Flat rate:{" "}
                                                        <span className="price-amount amount">
                                                            <bdi>
                                                                <span className="price-currencySymbol">$</span>5.00
                                                            </bdi>
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="radio"
                                                        name="shipping_method"
                                                        data-index="0"
                                                        id="shipping_method"
                                                        value="flat_rate:1"
                                                        className="shipping_method"
                                                        defaultChecked
                                                    />
                                                </li>
                                                <li>
                                                    <label htmlFor="shipping_method">Local pickup</label>
                                                    <input
                                                        type="radio"
                                                        name="shipping_method"
                                                        data-index="0"
                                                        id="shipping_method"
                                                        value="local_pickup:3"
                                                        className="shipping_method"
                                                    />
                                                </li>
                                            </ul>

                                            <p className="shipping-destination">
                                                Shipping to <strong>AL</strong>.
                                            </p>

                                            <div className='change-address-btn' onClick={handleAddressChangeClick}>
                                                Change address
                                            </div>

                                            {showAddressForm && (
                                                <div className="mt-3 ms-3">
                                                    <div className="mb-3">
                                                        <select className="form-select">
                                                            <option>United States (US)</option>
                                                            <option>Canada</option>
                                                            <option>Mexico</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <select className="form-select">
                                                            <option>Alabama</option>
                                                            <option>Alaska</option>
                                                            <option>Arizona</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Town / City"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="ZIP Code"
                                                        />
                                                    </div>
                                                    <button className="btn custom-btn">Update</button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                    <tr className="order-total">
                                        <th>Total</th>
                                        <td data-title="Total" className='text-end'>
                                            <strong>
                                                <span className="price-amount amount">
                                                    <bdi>
                                                        <span className="price-currencySymbol">$</span>35.04
                                                    </bdi>
                                                </span>
                                            </strong>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                            <div className="proceed-to-checkout">
                                <a
                                    href="/"
                                    className="checkout-button button"
                                >
                                    Proceed to checkout
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart