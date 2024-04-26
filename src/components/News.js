import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
          "source": {
            "id": null,
            "name": "Pff.com"
          },
          "author": "Trevor Sikkema",
          "title": "Trevor Sikkema's Final 2024 NFL Mock Draft: Vikings get J.J. McCarthy at No. 11, Malik Nabers lands with the Giants at No. 6 | NFL News, Rankings and Statistics - Pro Football Focus",
          "description": "The draft is now less than 24 hours away, so let’s get right to it. Using both what I’ve watched and what I’ve heard, I have constructed my final predictive mock for the 2024 NFL Draft.",
          "url": "https://www.pff.com/news/draft-trevor-sikkema-final-2024-nfl-mock-draft",
          "urlToImage": "https://media.pff.com/2024/04/Mockdraft1-scaled.jpg?w=1200&h=675",
          "publishedAt": "2024-04-25T02:38:00Z",
          "content": "Commanders go with Jayden Daniels: It feels like all the momentum is in Jayden Daniels corner at No. 2 overall. His style of play from the pocket will mesh well with Kliff Kingsbury's offense.\r\n A go… [+6921 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Greg Wehner",
          "title": "NASA re-establishes communication with Voyager 1 interstellar spacecraft that went silent for months - Fox News",
          "description": "NASA re-established communication with Voyager 1, an interstellar spacecraft that nearly five months ago began sending unreadable data back to the space agency.",
          "url": "https://www.foxnews.com/science/nasa-re-establishes-communication-voyager-interstellar-spacecraft-silent-months",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/04/NASA-voyager1.jpg",
          "publishedAt": "2024-04-25T01:50:00Z",
          "content": "NASA and Voyager 1 are communicating back and forth again, after the most distant human-made object in space stopped sending usable data back to the space agency nearly five months ago.\r\nNASAs Jet Pr… [+2524 chars]"
        },
        {
          "source": {
            "id": "abc-news",
            "name": "ABC News"
          },
          "author": "Luis Martinez, Matthew Seyler",
          "title": "US secretly sent long-range missiles to Ukraine to use against Russian invaders: Officials - ABC News",
          "description": "The White House says Russia has already been deploying similar weapons.",
          "url": "https://abcnews.go.com/Politics/us-secretly-long-range-missiles-ukraine-russian-invaders/story?id=109584125",
          "urlToImage": "https://i.abcnewsfe.com/a/92f52362-637c-4fae-aca4-e105b77b9779/Missiles-1-ap-er-240424_1713997798737_hpMain_16x9.jpg?w=1600",
          "publishedAt": "2024-04-24T23:14:39Z",
          "content": "The Pentagon confirmed Wednesday the U.S. had secretly provided Ukraine with a long-range Army Tactical Missile System that can reach deep into Russian-occupied areas -- or even strike more deeply in… [+5691 chars]"
        },
        {
          "source": {
            "id": "nbc-news",
            "name": "NBC News"
          },
          "author": "Angela Yang, Diana Dasrath",
          "title": "Tupac’s estate threatens to sue Drake over diss track using what appears to be late rapper’s AI-generated voice - NBC News",
          "description": "Tupac Shakur’s estate is threatening to sue Drake over his recent Kendrick Lamar diss track, calling what appears to be the use of an artificial intelligence-generated version of the late rapper’s voice a “blatant abuse” of his legacy.",
          "url": "https://www.nbcnews.com/pop-culture/pop-culture-news/tupac-shakur-estate-threatens-to-sue-drake-ai-use-dis-track-rcna149242",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-04/240424-tupac-shakur-drake-split-3x2-vl-441p-186454.jpg",
          "publishedAt": "2024-04-24T22:33:43Z",
          "content": "Tupac Shakurs estate is threatening to sue Drake over his recent Kendrick Lamar diss track, calling what appears to be the use of an artificial intelligence-generated version of the late rappers voic… [+4071 chars]"
        },
        {
          "source": {
            "id": "nbc-news",
            "name": "NBC News"
          },
          "author": "Rebecca Cohen",
          "title": "Deathbed confession leads to bodies of mother and daughter killed 24 years ago - NBC News",
          "description": "A man on his deathbed confessed to killing a mother and daughter 24 years ago, leading to the recovery of their remains this week, officials announced Tuesday.",
          "url": "https://www.nbcnews.com/news/us-news/deathbed-confession-leads-bodies-mother-daughter-killed-24-years-ago-rcna149208",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-04/240424-natasha-carter-missing-vl-131p-667a59.jpg",
          "publishedAt": "2024-04-24T22:02:11Z",
          "content": "A man on his deathbed confessed to killing a mother and daughter 24 years ago, leading to the recovery of their remains this week, officials announced Tuesday. \r\nSusan Carter and her 10-year-old daug… [+3760 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Christina Dugan Ramirez",
          "title": "'Friends' star Courteney Cox was blindsided when fiancé dumped her just one minute into therapy session - Fox News",
          "description": "Courteney Cox described the \"very intense\" moment Johnny McDaid broke up with her mid-therapy session. The \"Friends\" star said she \"didn’t know it was coming.\"",
          "url": "https://www.foxnews.com/entertainment/friends-star-courteney-cox-blindsided-fiance-dumped-her-one-minute-therapy-session",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/04/courteney-cox-johnny-mcdaid-scaled.jpg",
          "publishedAt": "2024-04-24T21:27:00Z",
          "content": "Courteney Cox\r\n is detailing the moment fiancé Johnny McDaid once broke up with her mid-therapy session. \r\nDuring an appearance on the \"Minnie Questions\" podcast\r\n on Wednesday, Cox opened up about t… [+2102 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Daytona Beach News-Journal"
          },
          "author": "Jennifer Sangalang, Rick Neale",
          "title": "Kennedy Space Center, Cape Canaveral launch may be seen from Volusia - Daytona Beach News-Journal",
          "description": "Nighttime launch windows! Weather permitting and depending on cloud cover, SpaceX Falcon 9 rocket launches should be visible in the Volusia County sky",
          "url": "https://www.news-journalonline.com/story/news/2024/04/24/spacex-rocket-launch-florida-watch-volusia-daytona-smyrna-beach-april/73442198007/",
          "urlToImage": "https://www.news-journalonline.com/gcdn/authoring/authoring-images/2024/04/23/PBRE/73431691007-space-x-starlink-653-2.JPG?crop=3509,1974,x0,y339&width=3200&height=1801&format=pjpg&auto=webp",
          "publishedAt": "2024-04-24T19:17:04Z",
          "content": "Day or night, watching a rocket launch on the beach is so Florida. But can someone Volusia County see a rocket launch from Kennedy Space Center or Cape Canaveral?\r\nWeather permitting and depending on… [+5821 chars]"
        },
        {
          "source": {
            "id": "nbc-news",
            "name": "NBC News"
          },
          "author": "Monica Alba",
          "title": "Biden campaign plans to keep using TikTok through the election - NBC News",
          "description": "Joe Biden’s re-election campaign plans to continue using TikTok for at least the next year, despite the president signing a law Wednesday that would ban the social media platform nationwide if its China-based parent company doesn’t sell it in that time frame.",
          "url": "https://www.nbcnews.com/politics/joe-biden/biden-campaign-keep-using-tiktok-signed-ban-law-rcna149158",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-04/240424-biden-ch-1106-099dd2.jpg",
          "publishedAt": "2024-04-24T15:30:30Z",
          "content": "WASHINGTON Joe Bidens re-election campaign plans to continue using TikTok for at least the next year, despite the president signing a law Wednesday that would ban the social media platform nationwide… [+2947 chars]"
        }
      ]
    constructor(){
        super();
        console.log("i am from news component");
        this.state = {
            articles : this.articles
        } 
        
    }
  render() {
    return (
      <div>
        <div className="container my-3">
            <h2 className = "my-4">News Monkey - Top Headlines</h2>
            <div className="row">
                <div className="col-md-4">
                    <NewsItem title="myTitle" description="mydesc" imageUrl="https://media.pff.com/2024/04/Mockdraft1-scaled.jpg?w=1200&h=675"/>
                </div>
                <div className="col-md-4">
                    <NewsItem title="myTitle" description="mydesc" imageUrl="https://static.foxnews.com/foxnews.com/content/uploads/2024/04/NASA-voyager1.jpg"/>
                </div>
                <div className="col-md-4">
                    <NewsItem title="myTitle" description="mydesc" imageUrl="https://i.abcnewsfe.com/a/92f52362-637c-4fae-aca4-e105b77b9779/Missiles-1-ap-er-240424_1713997798737_hpMain_16x9.jpg?w=1600"/>
                </div>
                <div className="col-md-4">
                    <NewsItem title="myTitle" description="mydesc" imageUrl="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-04/240424-tupac-shakur-drake-split-3x2-vl-441p-186454.jpg"/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default News
