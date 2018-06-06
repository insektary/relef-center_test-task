import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.less';
import { CSS } from '../CONST';

const Footer = ({ pages }) => {
    const pagesArray = new Array(pages).fill(1);

    return (
        <div className={ CSS.FOOTER }>
            <div className={ CSS.PAGES }>
                { pagesArray.map((item, index) => <NavLink
                    number={ index + 1 } key={ index + 1 }
                    activeClassName={ CSS.NAVBUTTON_CURRENT } className={ CSS.NAVBUTTON }
                    to={ `/${ index + 1 }` }>{ index + 1 }</NavLink> )}
            </div>
        </div>
    )
};

export default Footer;