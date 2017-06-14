import React, { Component } from 'react'
import './OtherArticles.css'

const articleData = [
  {
    imgSrc: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
    alt: 'orc',
    title: "Single Orcs in Indianapolis"
  },
  {
    imgSrc: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
    alt: 'mountain',
    title: "You won't believe what's under this mountain"
  },
  {
    imgSrc: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
    alt: 'gold',
    title: "Mine 20% more gold with One Weird Trick"
  },
  {
    imgSrc: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
    alt: 'hobbit',
    title: "Surprise for Indiana Hobbits born before 1999"
  },
]

class OtherArticles extends Component {
  render() {
    return(
      <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        {articleData.map(article => <OtherArticle article={article} />)}
      </div>
    )
  }
}

function OtherArticle (props) {
  return (
    <div className="small-6 medium-3 columns other-article">
      <a href="#">
        <img src={props.article.imgSrc} alt={props.article.alt} />
        <p>{props.article.title}</p>
      </a>  
    </div>
  )
}

export default OtherArticles