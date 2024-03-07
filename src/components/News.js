import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spenner from './Spenner';
// import { url } from 'inspector';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
//   articles = [
//     {
//       "source":{"id":"espn-cric-info","name":"ESPN Cric Info"},
// "author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
// "description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
// "url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
// "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
// "publishedAt":"2020-04-27T11:41:47Z",
// "content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
// },

// {
//   "source":{"id":"espn-cric-info","name":"ESPN Cric Info"},
// "author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
// "description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
// "url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
// "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
// "publishedAt":"2020-03-30T15:26:05Z",
// "content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
// },
// {
//   "source": {
//   "id": "wired", "name": "Wired" },
//   "author": "Joel Khalili",
//   "title": "The Trial Over Bitcoin’s True Creator Is in Session",
//   "description": "A UK High Court will settle a long-running debate over whether Craig Wright really is Satoshi Nakamoto, inventor of Bitcoin. Monday’s opening arguments laid the groundwork for both sides.",
//   "url": "https://www.wired.com/story/craig-wright-bitcoin-satoshi-nakamoto-trial/",
//   "urlToImage": "https://media.wired.com/photos/65bd7e2524c06ba3ede91a33/191:100/w_1280,c_limit/Craig-Wright-Trial-Day-1-Business-Yellow-1494808061.jpg",
//   "publishedAt": "2024-02-05T21:07:04Z",
//   "content": "For eight years, Craig Wright has claimed to be the elusive Bitcoin creator Satoshi Nakamoto. On Monday, in the swelling heat of a UK courtroom, a trial began that will finally settle the question.\r\n… [+3163 chars]"
//   },

//   {
//       "source": {
//       "id": "ars-technica",
//       "name": "Ars Technica"
//       },
//       "author": "Ashley Belanger",
//       "title": "Bitcoin price hits record $69K after SEC approvals fueled $7B in investments",
//       "description": "SEC chair warns bitcoin is still \"volatile\" and linked to \"illicit activity.\"",
//       "url": "https://arstechnica.com/tech-policy/2024/03/bitcoin-price-hits-record-69k-after-sec-approvals-fueled-7b-in-investments/",
//       "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/03/GettyImages-1872368024-760x380.jpg",
//       "publishedAt": "2024-03-05T19:07:13Z",
//       "content": "20\r\nBitcoin's price hit a record high Tuesday, surging above $69,000 and notching past its prior peak price of $68,991.85 recorded in 2021.\r\nAfter bitcoin's price sunk in 2022 amid a cryptocurrency i… [+4343 chars]"
//       },
//       {
//           "source": {
//           "id": "business-insider",
//           "name": "Business Insider"
//           },
//           "author": "prosen@insider.com (Phil Rosen)",
//           "title": "El Salvador's millennial crypto-loving president says the country's bitcoin holdings are up more than 40%",
//           "description": "Nayib Bukele said if El Salvador sold all of the bitcoin in its coffers today, it would bank roughly $41.6 million in profit.",
//           "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-el-salvador-millennial-president-bukele-investment-cryptocurrency-finance-2024-2",
//           "urlToImage": "https://i.insider.com/65df846290413ab8e1d796e4?width=1200&format=jpeg",
//           "publishedAt": "2024-02-29T12:46:09Z",
//           "content": "President Nayib Bukele said El Salvador won't sell its bitcoin investment.\r\nEmerson Flores/APHOTOGRAFIA/Getty Images\r\nEl Salvador is up big on its bitcoin bet, according to its millennial president N… [+2026 chars]"
//           }
//   ]
constructor(props) {
  super(props);
  this.state = {
    articles: [],
    loading: false,
    page: 1,
    totalResults: 0, // Initialize totalResults
  }
  document.title = `${this.capitallize(this.props.category)} - News Zone` ;
}

capitallize = (string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1)
}

async updateNews() {
  this.props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  this.props.setProgress(30);
  let parsedData = await data.json()
  this.props.setProgress(70);
  // console.log(parsedData);
  this.setState({
    articles:parsedData.articles,
    totalResults:parsedData.totalResults,
    loading:false
  })
  this.props.setProgress(100)

}

handlePrevClick =async ()=>{
  this.setState({page:this.state.page -1});
  this.updateNews();
}
handleNextClick = async ()=>{
 this.setState({ page:this.state.page+1});
 this.updateNews();

}

  

async componentDidMount() {
  this.updateNews();
  }

  fetchMoreData = async() => {
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
      loading:false
    })
  };

   

  
  
  
  //API reaches it limit
  // async componentDidMount() {
  //   try {
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c3a1e5dc4045482194b006efadd08a54&page=1&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  
  //     if (parsedData) {
  //       this.setState({
  //         articles: parsedData.articles || [],
  //         totalResults: parsedData.totalResults || 0,
  //         loading: false,
  //       });
  //     } else {
  //       console.error('Error fetching data:', parsedData);
  //       this.setState({ loading: false });
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     this.setState({ loading: false });
  //   }
  // }
  
  render() {
    return (
      <>
      <h1 className='text-center'>News Zone - Top {this.capitallize(this.props.category)}  Headlines</h1>
     {/* { this.state.loading && <Spenner/>} */}

     <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spenner/>}
        > 
        <div className="container">
      <div className="row">
        {this.state.articles.map((element) =>{
          return <div className="col-md-4" key={element.url}>
           <NewsItem title={element.title? element.title.slice(0,44):""} description={element.description? element.description.slice(0,88):""} newsurl={element.url} imgUrl={element.urlToImage} publishedAt={element.publishedAt} author={element.author} source={element.source.name}/>
        </div>
        })}
      </div>
      </div>
      </InfiniteScroll>

      {/* //next and previous button */}
      {/* 
      <div className="row">
        {!this.state.loading &&  this.state.articles.map((element) =>{
          return <div className="col-md-4" key={element.url}>
           <NewsItem title={element.title? element.title.slice(0,44):""} description={element.description? element.description.slice(0,88):""} newsurl={element.url} imgUrl={element.urlToImage} publishedAt={element.publishedAt} author={element.author} source={element.source.name}/>
        </div>
        })}
        </div>  
      <div className="container d-flex justify-content-between"> 
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 >  Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
      </div>*/}
      </>
    )
  }
}

export default News
