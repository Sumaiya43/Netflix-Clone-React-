import React from 'react'
import '../css/HomeScreen.css'
import Banner from './Banner.js'
import Nav from './Nav.js'
import Row from './Row.js'
import requests from '../Request.js'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
       <Nav/>
       <Banner/>
       

       <Row 
         title="NETFLIX ORIGINALS" 
         fetchUrl={requests.fetchNetflixOriginal}
         isLargeRow
       />

       <Row 
         title="TOP RATED" 
         fetchUrl={requests.fetchTopRated}
        
       />

       <Row 
         title="TRENDING" 
         fetchUrl={requests.fetchTrending}
       
       />

      <Row 
         title="ACTION MOVIES" 
         fetchUrl={requests.fetchActionMovies}
         
       />
    </div>
  )
}

export default HomeScreen