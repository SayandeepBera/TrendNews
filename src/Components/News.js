import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  cpaitalizeTitle = (str)=>{
    return str.slice(0,1).toUpperCase() + str.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };

    document.title=`${this.cpaitalizeTitle(this.props.category)} - NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });

    try {
      let data = await fetch(url);
      let preseData = await data.json();

      if (preseData.articles) {
        this.setState({
          articles: preseData.articles,
          totalArticles: preseData.totalResults || 0,
          loading: false,
        });
      } else {
        console.error("API response invalid", preseData);
        this.setState({
          articles: [],
          totalArticles: 0,
          loading: false,
        });
      }
      this.props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news", error);
      this.setState({ articles: [], loading: false });
    }
  }
  

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
  
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let preseData = await data.json();

    console.log(preseData);
    console.log(this.state.articles.length);
    console.log(this.state.totalArticles);
    console.log(this.state.articles);
    console.log("page = ",this.state.page);

    this.setState({
      articles: this.state.articles.concat(preseData.articles),
      totalArticles: preseData.totalResults,
      loading: false,
      page: nextPage,
    });
  };
  

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0" }}>
          NewsMonkey - Top {this.cpaitalizeTitle(this.props.category)} Headlines
        </h1>
    
        <InfiniteScroll
          dataLength={this.state.articles ? this.state.articles.length : 0}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < (this.state.totalArticles)}
          loader={<Spinner/>}>

          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItems title={element.title ? element.title.slice(0, 48) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L7MPOTG64US6RSYEEM6M2NLVMQ_size-normalized.jpg&w=1440"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>

      </>
    );
  }
}
