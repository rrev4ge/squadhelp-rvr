import React from 'react'

const FaqListItem = (props) => {

    const {header, body, classes} = props;

    return (
        <>
                <div className={ classes.headerArticle }>
                  {header}
                </div>
                <div className={ classes.article }>
                  {body}
                </div>
        </>
    )
}

export default FaqListItem;