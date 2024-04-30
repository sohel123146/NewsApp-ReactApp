import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props
    return (
      <div>
        <div className="card">
            <img className="card-img-top" src={imageUrl} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}<span className="badge bg-success ms-2">{source}</span></p>
                    <p className="card-text"><small className="text-danger">By {!author?"Unknow":author} on {new Date (date).toGMTString()}</small></p>
                    <a href={newsUrl} target="-blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
