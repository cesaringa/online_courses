import React from 'react'
// import marked from 'marked'
// import PropTypes from 'prop-types'

const Post = ({article}) => {
    // console.log(article)
    const {name, image, description} = article.fields
    // const postDescription = marked(description)
  return (
    <div className='post'>
        <h2 className='title'>{name}</h2>
        {image&&<img className='image' src={image.fields.file.url} alt={name} title={name} />}
        <section>{description}</section>
    </div>
  )
}

// Post.propTypes = {}

export default Post