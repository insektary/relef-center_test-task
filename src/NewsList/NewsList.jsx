import React from 'react';
import './NewsList.less';
import NewsItem from '../NewsItem/NewsItem';
import { CSS } from '../CONST';

const NewsList = ({ pageNumber, news, newsOnPage }) => {
    const begin = pageNumber * newsOnPage - newsOnPage;

    return (
        <div className={ CSS.CONTENT }>
            { news.slice(begin, begin + newsOnPage).map((item, index) =>
                <NewsItem date={ item.DATE } content={ item.NAME } previewPath={ item.PREVIEW_PATH } key={ index }/>) }
        </div>
    )};

export default NewsList;