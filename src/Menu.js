import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Text Component 1</Link>
                </li>
                <li>
                    <Link to="/text2">Text Component 2</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;