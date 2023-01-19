import React from 'react'
import { Route, Routes } from 'react-router-dom'


import LandingPage from './LandingPage'
import TvSearch from './TvSearch'
import MovieSearch from './MovieSearch'
import PeopleSearch from './PeopleSearch'
import BoxOffice from './BoxOffice'
import Theatres from './Theatres'
import Nav from './Nav'
import Footer from './Footer'


function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/movie' element={<MovieSearch />} />
        <Route path='/tv' element={<TvSearch />} />
        <Route path='/people' element={<PeopleSearch />} />
        <Route path='/boxoffice' element={<BoxOffice />} />
        <Route path='/theatres' element={<Theatres />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
