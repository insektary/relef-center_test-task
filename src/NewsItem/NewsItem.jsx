import React from 'react';
import './NewsItem.less';
import { CSS, URL } from '../CONST';

const NewsItem = ({ date, content, previewPath }) => {
    const dateObj = new Date(date * 1000);

    return (
        <div className={ CSS.NEWS_ITEM }>
            <div className={ CSS.NEWS_ITEM_IMAGE }>
                <img src={ `${ URL.IMAGE }${ previewPath }` } alt=""/>
            </div>
            <div className={ CSS.NEWS_CONTENT }>
                <span className={ CSS.NEWS_CONTENT_TITLE }>
                    { `${ dateObj.getDate() }. ${ dateObj.getMonth() }. ${ dateObj.getFullYear() }` }
                </span>
                <p className={ CSS.NEWS_CONTENT_TEXT }>{ content }</p>
            </div>
        </div>
    )};

export default NewsItem;