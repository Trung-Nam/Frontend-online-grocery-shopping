import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Location from './Location/Location';
import Logo from '/images/Logo.png'
import './Header.scss';
import { FiUser } from 'react-icons/fi';
import { TbShoppingBag } from 'react-icons/tb';
import Search from './Search/Search';
import Navigation from './Navigation';



const Header = () => {
    return (
        <div className='wrapper'>
            <div className="top-strip">
                <div className="container">
                    <p className='mb-0 mt-0 text-center text-white'>
                        Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay
                    </p>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    <div className="row align-items-center d-flex">
                        <div className="column-left d-flex align-items-center col-sm-2">
                            <Link to="/">
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>

                        <div className="column-center col-sm-8 d-flex align-items-center">
                            <Location />

                            {/* Header search start */}
                            <Search />
                            {/* Header search end */}
                        </div>

                        <div className="column-right d-flex col-sm-2 align-items-center justify-content-between me-auto">

                            {/* when user is not logged in*/}
                            {/* <a class="btn btn-primary signin-btn" href="/signin" role="button">SIGN IN</a> */}


                            {/* when user logged in*/}
                            <Button className="header-user">
                                <FiUser />
                            </Button>
                            <div className="cart-price">
                                <span>$3.29</span>
                            </div>


                            <a href="/cart" className="cart">
                                <Button className="cart-icon">
                                    <TbShoppingBag />
                                </Button>
                                <span className="cart-count">1</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <Navigation />

        </div>
    )
}

export default Header