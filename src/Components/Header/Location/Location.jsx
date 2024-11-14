import  { useEffect, useState } from 'react'
import { Button, Dialog } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from 'react-icons/io';
import './Location.scss'
import { MdClose } from 'react-icons/md';
import { useLocation } from '../../../Context/LocationContext';

const Location = () => {
    const { countries } = useLocation();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [countrySelected, setCountrySelected] = useState(null);
    const [countriesFiltered, setCountriesFiltered] = useState([]);


    // console.log(countriesFiltered);

    useEffect(() => {
        setCountriesFiltered(countries);
    }, [countries])


    const filterCountries = (e) => {
        const keyword = e.target.value.toLowerCase();

        if (keyword !== '') {
            setCountriesFiltered(countries.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            }))
        } else {
            setCountriesFiltered(countries);
        }
    }

    return (
        <div className="header-location-wrapper" onClick={() => setIsOpenModal(true)}>
            <Button className="header-location-btn d-flex justify-content-between align-items-center">
                <div className="header-location d-flex flex-column">
                    <span className="location-description">Your Location</span>
                    <span className='current-location'>
                        {countrySelected !== null ? countrySelected?.country : 'Select a location'}
                    </span>
                </div>
                <div className="ms-auto">
                    <FaAngleDown color='#233a95' />
                </div>
            </Button>
            <Dialog
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                className='location-modal'
            >
                <button className='close-popup' onClick={(e) => { e.stopPropagation(); setIsOpenModal(false); }}>
                    <MdClose />
                </button>


                <h5 className="entry-title">Choose your Delivery Location</h5>
                <div className="entry-description">Enter your address and we will specify the offer for your area.</div>
                <div className="header-search w-100 d-flex align-items-center">
                    <input
                        type="text"
                        placeholder='Search your area...'
                        onChange={(e) => {
                            filterCountries(e);
                        }}
                    />
                    <button>
                        <IoIosSearch fontSize='25px' />
                    </button>
                </div>

                <ul className="countries__list mt-3">
                    {
                        countriesFiltered?.length !== 0 && countriesFiltered?.map((item, index) => (
                            <li
                                key={index}
                                className={`countries__list-item `}
                                onClick={(e) => {
                                    setCountrySelected(item);
                                    e.stopPropagation();
                                    setIsOpenModal(false);
                                }}>
                                <Button>{item.country}</Button>
                            </li>
                        ))
                    }
                </ul>
            </Dialog>
        </div>
    )
}

export default Location