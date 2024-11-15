/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import './Dropdown.scss';


const Dropdown = ({ categories }) => {
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    return (
        <div className="dropdown-container">
            <ul className="dropdown-menu">
                {categories?.map((category) => (
                    <li
                        className="dropdown-item-container"
                        key={category?._id}
                        onMouseEnter={() => setActiveSubmenu(category?.subcategories)}
                    >
                        <a className="dropdown-item d-flex align-items-center" href="/">
                            {category?.image && <img src={category?.image} alt={`${category?.name}-icon`} />}
                            {category?.name}
                            {category?.subcategories?.length !== 0 && <FaAngleRight />}
                        </a>
                    </li>
                ))}
            </ul>


            {activeSubmenu && (
                <ul className="dropdown-menu submenu">
                    {activeSubmenu.map((subItem) => (
                        <li key={subItem?._id}>
                            <a className="dropdown-item d-flex align-items-center" href="/">
                                {subItem?.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
