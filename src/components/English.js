import React, { useState, useEffect } from 'react'
import { client } from "../client"
import NewPost from './NewPost'

export default function English() {

  const [articles, setArticles] = useState([])

 

  useEffect(() => {
    client.getEntries({
    })
    .then((response) => {
      setArticles(response.items)
      console.log("Response",response.items)
    })
    .catch(console.error)
  }, [])

  

  console.log("ARTICLES", articles)
  
  const englishArticles = articles.filter(article => article.fields.name.includes("English"))

  const englishArticlesList = englishArticles.map((article, index) =>
    <div className='post' key={index}>
      <h2 className='title'>{article.fields.name}</h2>
      {article.fields.image&&<img className='image' src={article.fields.image.fields.file.url} alt={article.fields.name} title={article.fields.name} />}
      <section>{article.fields.description}</section>
    </div>
  )


  console.log("EnglishArticles", englishArticles)

  // console.log("HERE", articles[0].fields.name)
  
  return (
    <div>
      {englishArticlesList}
    </div>
  )
}
