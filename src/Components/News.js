import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {

  constructor(){
    super();
    this.state={
      articles : [],
      loading : false,
      page : 1,
      totalArticles : 0
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=27412fcfbe7f489984bcb6560346821c&page=1&pagesize=${this.props.pagesize}`;
    let data=await fetch(url);
    let preseData=await data.json();
    this.setState({articles : preseData.articles, totalArticles : preseData.totalResults});
    console.log(preseData);
  }

  handlePrevClick = async ()=>{
    console.log("prev");
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=27412fcfbe7f489984bcb6560346821c&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
    let data=await fetch(url);
    let preseData=await data.json();
    console.log(preseData);
    this.setState({
      page : this.state.page - 1,
      articles : preseData.articles
    });
  }

  handleNextClick = async ()=>{
    console.log("next");
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=27412fcfbe7f489984bcb6560346821c&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    let data=await fetch(url);
    let preseData=await data.json();
    console.log(preseData);
    this.setState({
      page : this.state.page + 1,
      articles : preseData.articles
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headings</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                        <NewsItems title={element.title ? element.title.slice(0,48) : ""} description={element.description ? element.description.slice(0,90) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L7MPOTG64US6RSYEEM6M2NLVMQ_size-normalized.jpg&w=1440"} newsUrl={element.url}/>
                    </div>
          })}

        </div>

        <div className="container d-flex justify-content-between">
          <button type="button" disabled = {this.state.page <= 1} className="btn btn-warning" onClick={this.handlePrevClick}>&lArr; Previous</button>
          <button type="button" disabled = {this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pagesize)} className="btn btn-warning" onClick={this.handleNextClick}>Next &rArr;</button>
        </div>
        
      </div>
    )
  }
}
