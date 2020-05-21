import React from 'react'
import axios from 'axios'

const ArticleList = async () => {
  const response = await axios.get('/articles');
  let articleslist = response.data.articles.map((article) => {
    return (
      <>
        <div
          key={article.id}
          id={"article-" + article.id}
        >
      {article.title}
        </div> 

      </> 
    
    )

  })
  return (
  <div>
      {articleslist}
      </div>
  )
}
export default ArticleList