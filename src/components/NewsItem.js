import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsurl,author,publishedAt,source} = this.props;
    return (
        <div className="card my-3"  >
          <div style={{display:"flex",justifyContent:"center",position:"absolute",right:"0"}}> 
            <span className=" badge rounded-pill bg-danger" >{source}</span>
          </div>
        <img src={!imgUrl?"https://static.vecteezy.com/system/resources/previews/013/700/070/non_2x/businessman-crack-wall-with-hammer-strive-for-new-business-opportunities-or-achievements-man-employee-or-worker-break-boundary-or-limit-for-career-goals-or-challenge-flat-illustration-vector.jpg":imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text text-danger">By {!author?"unknown":author} on {publishedAt} time</p>
           
          <a href={newsurl} className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
