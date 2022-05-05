export default function NewPosts({posts}) {

    console.log("POSTS", posts)

    return (
      <div>
          {posts.map((article, index)=>
            <div className='post' key={article.fields.name}>
                <h2 className='title'>{article.fields.name}</h2>
                {article.fields.image&&<img className='image' src={article.fields.image.fields.file.url} alt={article.fields.name} title={article.fields.name} />}
                <section>{article.fields.description}</section>
            </div>
          )}
      </div>
    )
  }