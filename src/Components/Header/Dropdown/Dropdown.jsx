import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import './Dropdown.scss';

// eslint-disable-next-line react/prop-types
const Dropdown = ({ items }) => {
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    return (
        <div className="dropdown-container">
            <ul className="dropdown-menu">
                {items?.map((item, index) => (
                    <li
                        className="dropdown-item-container"
                        key={index}
                        onMouseEnter={() => setActiveSubmenu(item.submenu)}
                    >
                        <a className="dropdown-item d-flex align-items-center" href={item.link}>
                            {item.icon && <img src={item.icon} alt={`${item.title}-icon`} />}
                            {item.title}
                            {item.submenu.length !== 0 && <FaAngleRight />}
                        </a>
                    </li>
                ))}
            </ul>


            {activeSubmenu && (
                <ul className="dropdown-menu submenu">
                    {activeSubmenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                            <a className="dropdown-item d-flex align-items-center" href={subItem.link}>
                                {subItem.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
