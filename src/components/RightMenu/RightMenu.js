import React from "react";
import "./RightMenu.css";

function RightMenu() {
  const news = [{
    id : 1,
    title : "New K-Dramas on Netflix in February 2023​",
    link : "https://economictimes.indiatimes.com/news/international/us/korean-shows-on-netflix/slideshow/97172767.cms",
},
{
    id : 2,
    title : "Rock legend, CSNY co-founder David Crosby passes away at 81​",
    link : "https://economictimes.indiatimes.com/news/international/us/rock-legend-csny-co-founder-david-crosby-passes-away-at-81/articleshow/97172947.cms",
},
{
    id : 3,
    title : "Fragmentation can cost 7 pc of global GDP; be pragmatic and collaborate: IMF chief Kristalina Georgieva​",
    link : "https://economictimes.indiatimes.com/news/international/business/fragmentation-can-cost-7-pc-of-global-gdp-be-pragmatic-and-collaborate-imf-chief-kristalina-georgieva/articleshow/97174210.cms",
},
{
    id : 4,
    title : "Floyd Mayweather announces his first fight in UK against British star Liam Harrison​",
    link : "https://economictimes.indiatimes.com/news/international/uk/floyd-mayweather-announces-his-first-fight-in-uk-against-british-star-liam-harrison/articleshow/97175255.cms",
},
{
    id : 5,
    title : "Prince Harry’s popularity drops further after release of his memoir ‘Spare’, reveals new US poll​",
    link : "https://economictimes.indiatimes.com/news/international/uk/prince-harrys-popularity-drops-further-after-release-of-his-memoir-spare-reveals-new-us-poll/articleshow/97175406.cms",
},
{
    id : 6,
    title : "Greenland at its warmest in 1,000 years: Study​",
    link : "https://economictimes.indiatimes.com/news/international/world-news/greenland-at-its-warmest-in-1000-years-study/articleshow/97177004.cms",
},
{
    id : 7,
    title : "DAVOS 2023: WTO sticks with 1% projection for growth in global trade​",
    link : "https://economictimes.indiatimes.com/news/international/business/davos-2023-wto-sticks-with-1-projection-for-growth-in-global-trade/articleshow/97177576.cms",
},
{
    id : 8,
    title : "Scientists reveal best places to take shelter during nuclear explosions; Know here​",
    link : "https://economictimes.indiatimes.com/news/international/us/scientists-reveal-best-places-to-take-shelter-during-nuclear-explosions-know-here/articleshow/97177986.cms",
},
]

  return (
    <div className="right_menu_container">
      <p className="right_menu_title">Story Scope</p>
      <ul>
      <div className='different_news'>
                {news.map((value) => (<li className='different_news_individual'><a href={value.link} >{value.title.slice(0,25)} </a></li>))}
                </div>
      </ul>
    </div>
  );
}

export default RightMenu;
