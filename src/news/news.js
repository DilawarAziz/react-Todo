import React, { Component } from 'react'
import Newsitem from './newsitem'

export class News extends Component {

    // title="https://newsapi.org/v2/top-headlines?country=us&apiKey=37beb1a8c6894871ba7b62e898c3bfc6"
    articles=[ 
         {
        "source": {
            "id": "cnn",
            "name": "CNN"
       },
        "author": "Frank Pallotta, CNN Business",
        "title": "Netflix used to be secretive about viewership. Now it has a new top 10 website. - CNN",
        "description": "Netflix leads the streaming world with 213 million subscribers. Now the company is making it easier to see what they are watching.",
        "url": "https://nypost.com/wp-content/uploads/sites/2/2021/11/Heath-Freeman_11-copy.jpg?quality=90&strip=all&w=1024",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211014142808-08-squid-game-netflix-super-tease.jpg",
        "publishedAt": "2021-11-16T20:00:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "Virginia Tech coaching search: Gary Patterson, Hugh Freeze, Shane Beamer among top candidates - CBS Sports",
        "description": "Justin Fuente is out, leaving the Hokies with a leadership void to fill immediately",
        "url": "https://www.cbssports.com/college-football/news/virginia-tech-coaching-search-gary-patterson-hugh-freeze-shane-beamer-among-top-candidates/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/09/28/7b748675-0401-4c3a-ae49-d9c83e43ca1a/thumbnail/1200x675/4f5f55f3801e7f56a9a0244aeb1609e5/gary-patterson-tcu.jpg",
        "publishedAt": "2021-11-16T19:51:00Z",
        "content": "To the surprise of few, Virginia Tech parted ways with coach Justin Fuente on Tuesday. Now the scramble begins to find the next replacement for Frank Beamer. \r\nFuente finished with only 10 wins over … [+3051 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Times"
        },
        "author": "Rebecca Robbins",
        "title": "Pfizer Asks F.D.A. to Authorize Covid Pill For Unvaccinated People - The New York Times",
        "description": "The treatment, Paxlovid, is the second antiviral pill to show effectiveness in treating Covid, and works differently from the first.",
        "url": "https://www.nytimes.com/2021/11/16/business/pfizer-covid-pill-paxlovid-unvaccinated.html",
        "urlToImage": "https://static01.nyt.com/images/2021/11/16/science/16virus-briefing-pfizer-antiviral1/16virus-briefing-pfizer-antiviral1-facebookJumbo.jpg",
        "publishedAt": "2021-11-16T19:39:01Z",
        "content": "Both pills are geared toward older people or people who have obesity or medical conditions that put them at elevated risk for getting severely ill from Covid.\r\nA spokesman for Pfizer, Kit Longley, sa… [+1064 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Why Halo Infinite's Multiplayer Is Still In Beta - IGN Now - IGN",
        "description": "Halo Infinite's multiplayer was surprise-released a few weeks early yesterday, but it's still going to carry the 'beta' tag. According to 343 Industries, the...",
        "url": "https://www.youtube.com/watch?v=Sq_9WuCoBnY",
        "urlToImage": "https://i.ytimg.com/vi/Sq_9WuCoBnY/maxresdefault.jpg",
        "publishedAt": "2021-11-16T19:38:24Z",
        "content": null
    },]
    constructor(){
        super()
        this.state={
            articles:this.articles
        }
    }

   async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2cd7cc06eeb54cb39a533ec7225f5c7b"
        let fetchdata = await fetch(url)
        // let data = fetchdata.json()
        // this.setState({
        //     title:data.articles
        // })
        console.log( fetchdata.json().articles)
    }
    render() {
        // console.log(title)
        return (
            <div>
                <h1>news-main</h1>
                <div  className="row row-cols-1 row-cols-md-4 g-4">
                {/* {this.state.title.map((element)=>{                  
                 return<div className="col" key={element.url}>
                     <Newsitem  highlight={element.title} imageurl={element.urlToImage} heading={element.description}/>
                
                </div>
                })} */}
                </div>
            </div>
        )
    }
}

export default News
