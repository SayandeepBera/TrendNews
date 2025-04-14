import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

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
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27412fcfbe7f489984bcb6560346821c&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let preseData = await data.json();
    this.setState({
      articles: preseData.articles,
      totalArticles: preseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      () => this.updateNews()
    );
  };

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => this.updateNews()
    );
    
  };

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
  
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27412fcfbe7f489984bcb6560346821c&page=${nextPage}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let preseData = await data.json();

    this.setState({
      articles: this.state.articles.concat(preseData.articles),
      totalArticles: preseData.totalResults,
      loading: false,
      page: nextPage,
    });
  };
  

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ margin: "30px 0" }}>
          NewsMonkey - Top {this.cpaitalizeTitle(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner/>}

        <div>
            <div className="row">
              {!this.state.loading && this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItems title={element.title ? element.title.slice(0, 48) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L7MPOTG64US6RSYEEM6M2NLVMQ_size-normalized.jpg&w=1440"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                  );
                })}
            </div>
          </div>

        <div className="container d-flex justify-content-between my-4">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-warning" onClick={this.handlePrevClick}> &lArr; Previous </button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn btn-warning" onClick={this.handleNextClick}> Next &rArr; </button>
        </div>
      </div>
    );
  }
}
