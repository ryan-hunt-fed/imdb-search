import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'

import { searchPeople } from '../apis/imdb'


function PeopleSearch() {

    // const dispatch = useDispatch()
    const [getData, setGetData] = useState('')
    const [recieveData, setRecieveData] = useState([])
    // const [topMovies, setTopMovies] = useState([])



    const searchHandle = async (evt) => {
        evt.preventDefault()
        const actorSearch = await searchPeople(getData)
        setRecieveData(actorSearch)
        console.log('gathered data', recieveData)
    }

    const typeHandle = (evt) => {
        setGetData(evt.target.value)
        console.log('handle', getData)
    }

    // async function topFilms() {
    //     const topList = await popularMovies()
    //     setTopMovies(topList)
    //     console.log(topMovies)
    // }

    useEffect(() => {
        // dispatch(popularMovies())
        // topFilms
        // setTopMovies()
        // topFilms()

    }, [])

    return (
        <>
            <header className="header">
                <h1>People Search</h1>
            </header>
            <section>
                <div>
                    <form onSubmit={searchHandle}>
                        <label htmlFor='search'></label>
                        <input type='text' id='search' onChange={typeHandle} value={getData}></input>
                        <button>Search</button>
                    </form>
                </div>
                <div className='movie-search-container'>
                    {recieveData.map((people, idx) => {
                        return (
                            <>
                                {/* <Link to={`/:${movie.id}`}> */}
                                <div className='movie-search-items' key={idx}>
                                    {people?.image === '' ? <></> : <img src={people?.image} alt={people?.title} />}
                                    <p>{people?.title}</p>
                                    <p>{people?.description}</p>
                                </div>
                                {/* </Link> */}


                            </>
                        )
                    })}
                </div>
            </section>


        </>
    )
}

export default PeopleSearch