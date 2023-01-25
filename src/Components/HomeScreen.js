import React from 'react';
import "../CSS/HomeScreen.css"; 
import Banner from './Banner';
import Nav from './Nav';
import requests from './Requests';
import Row from './Row';

const HomeScreen = () => {


  return (
    <div className='homeScreen'>
    <Nav/>
    <Banner/>
    <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchhorrorMovies}/>
    <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen