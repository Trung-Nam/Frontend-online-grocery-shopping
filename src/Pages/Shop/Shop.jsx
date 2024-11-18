import { useEffect, useState } from 'react'
import './Shop.scss'
import { RiArrowRightSLine } from "react-icons/ri";
import { FaPlus } from 'react-icons/fa6';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { InputAdornment, Pagination, TextField } from '@mui/material';
import Product from '../../Components/Product/Product/Product';
import useCategories from '../../Hooks/useCategories';
import useProducts from '../../Hooks/useProducts';
import { Modal } from 'bootstrap';
import QuickViewProduct from '../../Components/Product/QuickViewProduct/QuickViewProduct';
import { CgSearch } from 'react-icons/cg';

const Shop = () => {
    const [categories] = useCategories();
    const [products, loading] = useProducts();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [value, setValue] = useState([0, 100]);
    const [numberOfItems, setNumberOfItems] = useState(9);
    const [sortBy, setSortBy] = useState("Sort by lasted")
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (products && products.length) {
            setFilteredProducts(products);
        }
    }, [products]);

    const handleSearch = (searchTerm) => {
        if (!searchTerm.trim()) {
            setFilteredProducts(products);
            return;
        }

        const filtered = products.filter((product) =>
            product?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };




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
    return (
        <main id="main" className="site-primary">
            <div className="site-content">
                <div className="homepage-content">
                    <div className="container">
                        <nav className="breadcrumb">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <RiArrowRightSLine />
                                <li>Shop</li>
                            </ul>
                        </nav>

                        <header className="products-header"></header>

                        <div className="row content-wrapper">
                            <div id='sidebar' className="col-12 col-md-3 col-lg-3 content-secondary site-sidebar">
                                <div className="site-scroll">
                                    <div className="sidebar-inner">
                                        {/* <div className="sidebar-mobile-header"></div>  */}
                                        <div className="product__categories">
                                            <h4 className="product__categories-title">Product Categories</h4>

                                            <div className="site-checkbox-lists">
                                                <div className="site-scroll ps">
                                                    <ul className="category__lists">
                                                        {categories?.map((category) => (
                                                            <li className="category__lists-item" key={category?._id}>
                                                                <a className="d-flex align-items-center" href="/">
                                                                    <input
                                                                        name="product"
                                                                        value={category?.name}
                                                                        id={`checkbox-${category?._id}`}
                                                                        type="checkbox"
                                                                    />
                                                                    <span
                                                                        onClick={() => {
                                                                            const checkbox = document.getElementById(`checkbox-${category?._id}`);
                                                                            checkbox.checked = !checkbox.checked;
                                                                        }}
                                                                    >
                                                                        {category?.name}
                                                                    </span>
                                                                </a>
                                                                {category?.subcategories?.length !== 0 && (
                                                                    <FaPlus onClick={() => setActiveIndex(activeIndex === category?._id ? null : category?._id)} /> // Toggle submenu for clicked item
                                                                )}
                                                                {activeIndex === category?._id && (
                                                                    <ul className="submenu">
                                                                        {category?.subcategories?.map((subItem, subIndex) => (
                                                                            <li key={subIndex} className='submenu-item'>
                                                                                <a className="dropdown-item d-flex align-items-center" href={subItem?.link}>
                                                                                    <input
                                                                                        name={`sub_product_cat`}
                                                                                        value={subItem?.name}
                                                                                        id={`sub-checkbox-${subItem?._id}-${subIndex}`}
                                                                                        type="checkbox"
                                                                                    />
                                                                                    <span
                                                                                        onClick={() => {
                                                                                            const checkbox = document.getElementById(`sub-checkbox-${subItem?._id}-${subIndex}`);
                                                                                            checkbox.checked = !checkbox.checked;
                                                                                        }}
                                                                                    >
                                                                                        {subItem.name}
                                                                                    </span>
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>


                                                </div>
                                            </div>
                                        </div>

                                        <div className="product__price-filter">
                                            <h4 className="product__price-filter-title">Filter by price</h4>
                                            <RangeSlider
                                                value={value}
                                                onInput={setValue}
                                            />
                                            <div className="price_slider-amount">
                                                <div className="price_label">
                                                    Price: <span className="from">$0</span> — <span className="to">$70</span>
                                                </div>
                                                <button type='submit' className="btn custom-btn">Filter</button>
                                            </div>
                                        </div>

                                        <div className="product__status">
                                            <h4 className="product__status-title">Product Status</h4>
                                            <div className="site-checkbox-lists">
                                                <div className="site-scroll ps">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                <input name="stockonsale" value="instock" id="instock" type="checkbox" />
                                                                <label>
                                                                    <span>In Stock</span>
                                                                </label>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                <input name="stockonsale" value="onsale" id="onsale" type="checkbox" />
                                                                <label>
                                                                    <span>On Sale</span>
                                                                </label>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product__brands">
                                            <h4 className="product__brands-title">Brands</h4>
                                            <ul className="layered-nav-list">
                                                <li className="layered-nav-list__item">
                                                    <input type="checkbox" />
                                                    <a rel="nofollow" href="/">
                                                        Frito Lay
                                                    </a>
                                                    <span className="count">(10)</span>
                                                </li>
                                                <li className="layered-nav-list__item">

                                                    <input type="checkbox" />
                                                    <a rel="nofollow" href="/">
                                                        Nespresso
                                                    </a>
                                                    <span className="count">(11)</span>
                                                </li>
                                                <li className="layered-nav-list__item">

                                                    <input type="checkbox" />
                                                    <a rel="nofollow" href="/">
                                                        Oreo
                                                    </a>
                                                    <span className="count">(9)</span>
                                                </li>
                                                <li className="layered-nav-list__item">
                                                    <input type="checkbox" />
                                                    <a rel="nofollow" href="/">
                                                        Quaker
                                                    </a>
                                                    <span className="count">(10)</span>
                                                </li>
                                                <li className="layered-nav-list__item">
                                                    <input type="checkbox" />
                                                    <a rel="nofollow" href="/">
                                                        {"Welch's"}
                                                    </a>
                                                    <span className="count">(10)</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="media__image">
                                            <img
                                                width="1280"
                                                height="1750"
                                                src={"/images/sidebar-banner.gif"}
                                                className="image wp-image-1184 attachment-full size-full"
                                                alt=""
                                                style={{ maxWidth: '100%', height: 'auto' }}
                                                decoding="async"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-9 content-primary">

                                <div className="shop-banner">
                                    <div className="module-banner image align-center align-middle">
                                        <div className="module-body">
                                            <div className="banner-wrapper">
                                                <div className="banner-content">
                                                    <div className="content-main">
                                                        <h4 className="entry-subtitle color-text xlight">Organic Meals Prepared</h4>
                                                        <h3 className="entry-title color-text large">
                                                            Delivered to <strong className="color-success">your Home</strong>
                                                        </h3>
                                                        <div className="entry-text color-info-dark">
                                                            Fully prepared &amp; delivered nationwide.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="banner-thumbnail">
                                                    <img
                                                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
                                                        alt="Organic Meals Prepared"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="filter__options">
                                    <div className="d-flex align-items-center col-8">
                                        {/* Search Box */}
                                        <TextField
                                            label="Enter your product name..."
                                            variant="outlined"
                                            size="small"
                                            onChange={(e) => handleSearch(e.target.value)}
                                            sx={{ width: '100%' }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <CgSearch />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </div>
                                    <div className="shop-view-filters">
                                        <div className="dropdown">
                                            <button
                                                className="btn dropdown-toggle border-start"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {sortBy}
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-sort">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="/"
                                                        onClick={() => {
                                                            setSortBy("Sort by lasted")
                                                        }}
                                                    >
                                                        Sort by lasted
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="/"
                                                        onClick={() => {
                                                            setSortBy("Sort by popularity")
                                                        }}
                                                    >
                                                        Sort by popularity
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="/"
                                                        onClick={() => {
                                                            setSortBy("Sort by average rating")
                                                        }}
                                                    >
                                                        Sort by average rating
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="/"
                                                        onClick={() => {
                                                            setSortBy("Sort by price: low to high")
                                                        }}
                                                    >
                                                        Sort by price: low to high
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="/"
                                                        onClick={() => {
                                                            setSortBy("Sort by price: high to low")
                                                        }}
                                                    >
                                                        Sort by price: high to low
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="dropdown">
                                            <button
                                                className="btn dropdown-toggle border-end border-start"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <span>Number items: </span> {numberOfItems}
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-items">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="/"
                                                        onClick={() => {
                                                            setNumberOfItems(9);
                                                        }}
                                                    >
                                                        9
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="/"
                                                        onClick={() => {
                                                            setNumberOfItems(18);
                                                        }}
                                                    >
                                                        18
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="/"
                                                        onClick={() => {
                                                            setNumberOfItems(27);
                                                        }}
                                                    >
                                                        27
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="/"
                                                        onClick={() => {
                                                            setNumberOfItems(36);
                                                        }}
                                                    >
                                                        36
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                {loading ? (
                                    <p>Loading products...</p>
                                ) : (
                                    <div className="products d-flex flex-wrap justify-content-start align-items-center gap-2 ms-2">
                                        {filteredProducts.length > 0 ? (
                                            filteredProducts.map((product) => (
                                                <Product key={product._id} product={product} onQuickView={handleQuickView} />
                                            ))
                                        ) : (
                                            <p>No products found</p> // Show this if no products match search
                                        )}
                                    </div>
                                )}

                                <div className="pagination d-flex justify-content-center align-items-center">
                                    <Pagination count={10} color="primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <QuickViewProduct product={selectedProduct} />
        </main>
    )
}

export default Shop