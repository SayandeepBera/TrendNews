import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div>
        <div className="my-3">
        <div className="card" style={{width: "24rem"}}>
            <div style={{display : "flex", position : "absolute", right : "0"}}>
              <span className="badge rounded-pill bg-danger">
                {source}
              </span>
            </div>

            <img src={imageUrl} alt="/"/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text my-2"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_main" className="btn btn-primary">Read More</a>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
