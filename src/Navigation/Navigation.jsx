import React from 'react';
import './Navigation.less';
import { CSS, LABELS } from '../CONST';

const Navigation = ({ newsOnPage, changeNumberNewsOnPage, changeSort }) => (
    <header className={ CSS.NAV }>
        <div className={ CSS.MENU }>
            <div className={ CSS.SORT }>
                <span>Сортировать по</span>
                <select className={ CSS.SORT_SELECT } onChange={ changeSort }>
                    <option value={ LABELS.DATE } className={ CSS.OPTION }>дате</option>
                    <option value={ LABELS.TITLE } className={ CSS.OPTION }>заголовку</option>
                </select>
            </div>
            <div className={ CSS.BUTTONS }>
                <button
                    onClick={ changeNumberNewsOnPage } className={ `${ CSS.BUTTON }
                    ${ newsOnPage === LABELS.SIX ? CSS.CURRENT_BUTTON : '' }` }>{ LABELS.SIX }
                </button>
                <button
                    onClick={ changeNumberNewsOnPage }  className={ `${ CSS.BUTTON }
                    ${ newsOnPage === LABELS.TWELVE ? CSS.CURRENT_BUTTON : '' }` }>{ LABELS.TWELVE }
                </button>
                <button
                    onClick={ changeNumberNewsOnPage }  className={ `${ CSS.BUTTON }
                    ${ newsOnPage === LABELS.TWENTY_FOUR ? CSS.CURRENT_BUTTON : '' }` }>{ LABELS.TWENTY_FOUR }
                </button>
            </div>
        </div>
    </header>
);

export default Navigation;
