import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles :[],
            loading:false,
            page:1
        } 
    }
    async componentDidMount()
    {
      let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=5c6a9afa69c84015a36252f472309dac&pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles : parsedData.articles,
        totalResults : parsedData.totalResults
      })
    }

    handleprevpage = async () =>
    {
      console.log("prev")
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5c6a9afa69c84015a36252f472309dac&page=${this.state.page - 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page : this.state.page - 1,
        articles:parsedData.articles
      })
    }

    handlenextpage = async () =>
    {
      console.log("next")
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/20))
      {

      }
      else
      {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5c6a9afa69c84015a36252f472309dac&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          page : this.state.page + 1,
          articles:parsedData.articles
        })
      }
    }

  render() {
    return (
      <div>
        <div className="container my-3">
        <h2 className="my-4">News Monkey - Top Headlines</h2>
            <div className='row'>
              {this.state.articles.map((element)=>{
                return <div className="col-md-4 mb-3" key={element.url}>
                    <NewsItem title={element.title ? element.title:' '} description={element.description ? element.description:' '} 
                    imageUrl={element.urlToImage ? element.urlToImage : 'https://images.news18.com/ibnlive/uploads/2024/01/mea-spokesperson-randhir-jaiswal-2024-01-012ebe814e98e891c512a467f86e0903-16x9.jpg?impolicy=website&width=1200&height=675'} 
                    newsUrl={element.url}/>
                </div>
              })}
            </div>
            <div className='container d-flex justify-content-between'>
              <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevpage}>&laquo; Previous</button>
              <button type="button" className="btn btn-dark" onClick={this.handlenextpage}>Next &raquo;</button>
            </div>
        </div>
      </div>
    )
  }
}

export default News
