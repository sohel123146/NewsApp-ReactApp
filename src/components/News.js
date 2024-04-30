import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country:'in',
    pagSize : 8,
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }

  capitalizefirstletter = (string) =>
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    constructor(props){
        super(props);
        this.state = {
            articles :[],
            loading:false,
            page:1,
            totalResults:0,
        }
        document.title = `${this.capitalizefirstletter(this.props.category)} - NewsMonkey`;
    }

    async updateNews(){
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c6a9afa69c84015a36252f472309dac&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles : parsedData.articles,
        totalResults : parsedData.totalResults,
        loading:false,
      })
    }

    async componentDidMount()
    {
      this.updateNews()
    }

    handleprevpage = async () =>
    {
      // console.log("prev")
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c6a9afa69c84015a36252f472309dac&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true})
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // console.log(parsedData);
      // this.setState({
      //   page : this.state.page - 1,
      //   articles:parsedData.articles,
      //   loading:false,
      // })
      this.setState({
        page : this.state.pagSize - 1,
      })
      this.updateNews()
    }

    handlenextpage = async () =>
    {
      // console.log("next")
      // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
      // {
      //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c6a9afa69c84015a36252f472309dac&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      //   this.setState({loading:true})
      //   let data = await fetch(url);
      //   let parsedData = await data.json();
      //   console.log(parsedData);
      //   this.setState({
      //     page : this.state.page + 1,
      //     articles:parsedData.articles,
      //     loading:false,
      //   })
      // }
      this.setState({
        page : this.state.pagSize + 1,
      })
      this.updateNews()
    }

    fetchMoreData = async () => {
      this.setState({
        page : this.state.pagSize + 1,
      })
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c6a9afa69c84015a36252f472309dac&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles : this.state.articles.concat(parsedData.articles),
        totalResults : parsedData.totalResults,
      })
    };

  render() {
    return (
      <>
        <div className="container my-3">
        <h1 className="my-4 text-center">News Monkey - Top {this.capitalizefirstletter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
              <div className='row'>
                {this.state.articles.map((element)=>{
                  return <div className="col-md-4 mb-3" key={element.url}>
                      <NewsItem title={element.title ? element.title:' '} description={element.description ? element.description:' '} 
                      imageUrl={element.urlToImage ? element.urlToImage : 'https://images.news18.com/ibnlive/uploads/2024/01/mea-spokesperson-randhir-jaiswal-2024-01-012ebe814e98e891c512a467f86e0903-16x9.jpg?impolicy=website&width=1200&height=675'} 
                      newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
                })}
              </div>
            </div>
            </InfiniteScroll>
        </div>
      </>
    )
  }
}

export default News
