import { useEffect } from "react"
import { useState } from "react"
import Newsitem from "./Newsitem"

const Newsboard = ({category}) => {

    const [articles,setArticles]=useState([])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${"c5014ea528614523a852723368352d1b"}`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[category])
  return (
    <>
        <h2 className="text-center my-4">Latest <span className="badge bg-danger mr-3">News</span></h2>
        {articles.map((news,index)=>{
            return  <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </>
  )
}

export default Newsboard