import React from 'react'

const NewsItem = (props) => {
    let {title,description,imageUrl,newsUrl,author,date,source} = props
    return (
      <div>
        <div className="card">
          <div style={{display:'flex',justifyContent:'center',position:'absolute',right:'0'}}>
          <span className="badge bg-success ms-2">{source}</span>
          </div>
            <img className="card-img-top" src={imageUrl} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}/</p>
                    <p className="card-text"><small className="text-danger">By {!author?"Unknow":author} on {new Date (date).toGMTString()}</small></p>
                    <a href={newsUrl} target="-blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
        </div>
      </div>
    )
}

export default NewsItem
