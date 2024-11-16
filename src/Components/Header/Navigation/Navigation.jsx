import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import "./Navigation.scss"
import useCategories from '../../../Hooks/useCategories';

const Navigation = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [categories] = useCategories();
    
    return (
        <div className="header-nav d-flex align-items-center border-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-6 all-categories">
                        <div className="dropdown">
                            <Button
                                className="all-categories-btn d-flex align-items-center w-100"
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                aria-expanded={isDropdownOpen}
                            >
                                <span className="menu-icon me-2">
                                    <IoIosMenu />
                                </span>
                                <span>All Categories</span>
                                <span className="angle-down-icon ms-2">
                                    <FaAngleDown />
                                </span>
                            </Button>
                            {isDropdownOpen && (
                                <Dropdown categories={categories} />
                            )}
                        </div>
                        <div className="all-categories-description">TOTAL 63 PRODUCTS</div>
                    </div>

                    <div className="col-lg-9 col-md-8 col-sm-6 primary-menu">
                        <ul className="list-group list-group-horizontal ms-auto flex-wrap">
                            <li className="list-group-item">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to='/'>Meats & Seafood</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to='/'>Bakery</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to='/'>Beverages</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
