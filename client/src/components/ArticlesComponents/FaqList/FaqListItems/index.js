import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const FaqListItem = (props) => {

    const {header, body, classes} = props;

    return (
        <>
                <div className={ classes.headerArticle }>
                  {header}
                </div>
                <div className={ classes.article }>
                  {ReactHtmlParser(body)}
                </div>
        </>
    )
}

export default FaqListItem;