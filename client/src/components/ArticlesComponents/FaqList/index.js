import React from 'react'
import FaqListItem from './FaqListItems';

const FaqList = (props) => {

    const {faq, classes} = props;

    const list = (lists) => 
      lists.map((l, key)=>
        <div key = {key} className={ classes.ColumnContainer }>
          {l.map( (a, key) => 
              <FaqListItem key={key} 
                            header={a.header}
                            body={a.body}
                            classes={{
                                headerArticle: classes.headerArticle,
                                article: classes.article,
                            }}

              />
            )
          }
        </div>
      )

    return (
        <div className={ classes.articlesMainContainer }>
            {list(faq)}
        </div>
    )
}

export default FaqList;