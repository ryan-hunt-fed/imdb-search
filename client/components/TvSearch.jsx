import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'

// import { searchTv, popularTv } from '../apis/imdb'
import { popularTv } from '../apis/imdb'


function TvSearch() {

    // const dispatch = useDispatch()
    // const [getData, setGetData] = useState('')
    // const [recieveData, setRecieveData] = useState([])
    const [topTv, setTopTv] = useState([])



    // const searchHandle = async (evt) => {
    //     evt.preventDefault()
    //     const tvSearch = await searchTv(getData)
    //     setRecieveData(tvSearch)
    //     console.log(recieveData)
    // }

    // const typeHandle = (evt) => {
    //     setGetData(evt.target.value)
    //     console.log('handle', getData)
    // }

    async function topShows() {
        const topList = await popularTv()
        setTopTv(topList)

    }

    useEffect(() => {
        // dispatch(popularMovies())
        // topFilms
        // setTopMovies()
        topShows()

    }, [])

    return (
        <>
            <header className="tv-header">
                <h1>Top Popular Shows</h1>
            </header>

            <section>
                <div>

                    <div className='media-container'>
                        {topTv.map((tv, idx) => {
                            return (
                                <>

                                    <div className='media-box'>
                                        <div className='media-items' key={idx}>
                                            <div className='media-image-box'>
                                                <img src={tv?.image} alt={tv?.title} />
                                            </div>
                                            <div className='media-content-box'>
                                                <div className='media-content-box-child'>
                                                    <h2>{tv?.title}</h2>
                                                    <p><strong>Rank:</strong> {tv?.rank}</p>
                                                    <p><strong>Rating:</strong> {tv?.imDbRating}/10</p>
                                                    <p><strong>Crew:</strong> {tv?.crew}</p>
                                                    <p><strong>Year Released:</strong> {tv?.year}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}
export default TvSearch