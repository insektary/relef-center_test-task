import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.less';
import { CSS } from '../CSS_CONST';

const { MENU } = CSS;

const Navigation = () => (
    <header className={ CSS.NAV }>
        <div className={ CSS.MENU }>
            <div className={ CSS.SORT }>
                <span>Сортировать по</span>
                <select className={ CSS.SORT_SELECT }>
                    <option className={ CSS.OPTION }>дате</option>
                    <option className={ CSS.OPTION }>заголовку</option>
                </select>
            </div>
            <div className={ CSS.BUTTONS }>
                <button className={ CSS.BUTTON }>{ 6 }</button>
                <button className={ CSS.BUTTON }>{ 12 }</button>
                <button className={ CSS.BUTTON }>{ 24 }</button>
            </div>
        </div>
    </header>
);

export default Navigation;
