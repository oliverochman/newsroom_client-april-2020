import React from 'react'
import axios from "axios"

const ArticleList = async () => {
  response = await axios.get('/articles');
  return (
    <div>
      <h4>

      </h4>
    </div>
  )
}
export default ArticleList