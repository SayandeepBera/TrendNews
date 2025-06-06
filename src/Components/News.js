import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  // Capitalize the text
  const capitalizeTitle = (str)=>{
    return str.slice(0,1).toUpperCase() + str.slice(1);
  }

  // Update news function
  const updateNews = async()=> {
    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);

    let data = await fetch(url); // fetch the data from API
    let preseData = await data.json(); // Convert the data into json formate
    
    try {
      if (preseData.articles) {
        setArticles(preseData.articles);
        setTotalArticles(preseData.totalResults);
        setLoading(false);

      } else {
        console.error("API response invalid", preseData);
        setArticles([]);
        setTotalArticles(0);
        setLoading(false);
      }

      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news", error);
      setArticles(preseData.articles);
      setLoading(false);
    }
  }
  
  useEffect(()=>{
    updateNews();
    document.title=`${capitalizeTitle(props.category)} - TrendNews`;
    // eslint-disable-next-line
  }, []);


  const fetchMoreData = async () => {
    const nextPage = page + 1;
  
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pagesize=${props.pageSize}`;
    setLoading(false);
    let data = await fetch(url);
    let preseData = await data.json();

    setArticles(articles.concat(preseData.articles));
    setTotalArticles(preseData.totalResults);
    setLoading(false);
    setPage(nextPage);
  };
  

  return (
    <>
      <h1 className="text-center" style={{ marginBottom: "25px", marginTop : "135px" }}>
        TrendNews - Top {capitalizeTitle(props.category)} Headlines
      </h1>

      {loading && <Spinner/>}

      {/* Add InfiniteScroll  */}
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchMoreData}
        hasMore={articles.length < (totalArticles)}
        loader={<Spinner/>}>

        <div className="container">
          <div className="row">
            {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItems title={element.title ? element.title.slice(0, 48) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L7MPOTG64US6RSYEEM6M2NLVMQ_size-normalized.jpg&w=1440"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source ? element.source.name : "Unknown"} />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  );
  
}

News.defaultProps = {
  country: "us",
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
