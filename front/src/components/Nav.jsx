import React from 'react';

const Nav = ({ children , onClick}) => (
    <li onClick={onClick}>
        {children}
    </li>
)

export default React;