import { useState, useEffect } from "react";
import { TextField, InputAdornment, Slider, Typography } from "@mui/material";
import { CgSearch } from "react-icons/cg";
import Product from "./Product"; // Assuming you have a Product component

const ProductList = () => {
    const [categories] = useCategories();
    const [products, loading] = useProducts();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [value, setValue] = useState([0, 100]);
    const [numberOfItems, setNumberOfItems] = useState(9);
    const [sortBy, setSortBy] = useState("Sort by lasted");
    const [searchTerm, setSearchTerm] = useState("");

    // Combine filtering and sorting logic
    useEffect(() => {
        let updatedProducts = [...products];

        // Filter by price range
        updatedProducts = updatedProducts.filter(
            (product) => product.price >= value[0] && product.price <= value[1]
        );

        // Filter by search term
        if (searchTerm.trim()) {
            updatedProducts = updatedProducts.filter((product) =>
                product?.name?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort products
        if (sortBy === "Sort by popularity") {
            updatedProducts.sort((a, b) => b.popularity - a.popularity);
        } else if (sortBy === "Sort by average rating") {
            updatedProducts.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "Sort by price: low to high") {
            updatedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === "Sort by price: high to low") {
            updatedProducts.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(updatedProducts.slice(0, numberOfItems)); // Apply number of items limit
    }, [products, sortBy, value, searchTerm, numberOfItems]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div>
            <div className="filter__options">
                {/* Search Box */}
                <div className="d-flex align-items-center col-8">
                    <TextField
                        label="Enter your product name..."
                        variant="outlined"
                        size="small"
                        onChange={(e) => handleSearch(e.target.value)}
                        sx={{ width: "100%" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <CgSearch />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                {/* Sort By Dropdown */}
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
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSortBy("Sort by popularity");
                                }}
                            >
                                Sort by popularity
                            </a>
                        </li>
                        <li>
                            <a
                                className="dropdown-item"
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSortBy("Sort by average rating");
                                }}
                            >
                                Sort by average rating
                            </a>
                        </li>
                        <li>
                            <a
                                className="dropdown-item"
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSortBy("Sort by price: low to high");
                                }}
                            >
                                Sort by price: low to high
                            </a>
                        </li>
                        <li>
                            <a
                                className="dropdown-item"
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSortBy("Sort by price: high to low");
                                }}
                            >
                                Sort by price: high to low
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Number of Items Dropdown */}
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
                        {[9, 18, 27, 36].map((num) => (
                            <li key={num}>
                                <a
                                    className="dropdown-item"
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setNumberOfItems(num);
                                    }}
                                >
                                    {num}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Products Section */}
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className="products d-flex flex-wrap justify-content-start align-items-center gap-2 ms-2">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Product
                                key={product._id}
                                product={product}
                                onQuickView={setSelectedProduct}
                            />
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductList;
