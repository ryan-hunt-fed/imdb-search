import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'

// import { useParams } from 'react-router-dom'
import { weekendBoxOffice, allBoxOffice } from '../apis/imdb'

function BoxOffice() {
    // const dispatch = useDispatch()
    // let id = useParams()


    const [weekendBox, setWeekendBox] = useState([])
    const [allBox, setAllBox] = useState([])


    async function weekendFilms() {
        const weekendList = await weekendBoxOffice()
        setWeekendBox(weekendList)
    }

    async function allFilms() {
        const allList = await allBoxOffice()
        setAllBox(allList)
    }

    useEffect(() => {

        weekendFilms()
        allFilms()

    }, [])

    return (
        <>
            <section>
                <div>
                    <h1 className='box-header'>Weekend Box Office</h1>
                    <div className='media-container'>
                        {weekendBox.map((movie, idx) => {
                            return (
                                <>
                                    <div className='media-box'>
                                        <div className='media-items' key={idx}>
                                            <div className='media-image-box'>
                                                <img src={movie?.image} alt={movie?.title} />

                                            </div>
                                            <div className='media-content-box'>
                                                <div className='media-content-box-child'>
                                                    <h2><strong>{movie?.title}</strong></h2>
                                                    <p><strong>Rank:</strong> {movie?.rank}</p>
                                                    {/* <p><strong>Rating: </strong>{movie?.imDbRating}/10</p> */}
                                                    <p><strong>Weekend Gross$:</strong> {movie?.weekend}</p>
                                                    <p><strong>Total Gross$:</strong> {movie?.gross}</p>
                                                    <p><strong>Weeks at Box Office:</strong>  {movie?.weeks}</p>
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
            <section>
                <div>
                    <h1 className='box-header'>All Time Box Office</h1>
                    <div className='all-box-office-container'>
                        {allBox.map((movie, idx) => {
                            return (
                                <>
                                    <div className='all-box-office-items' key={idx}>

                                        <p><strong>Rank:</strong> {movie?.rank}</p>
                                        <p><strong>Film:</strong> {movie?.title}</p>


                                        <p><strong>Domestic Gross$:</strong> {movie?.domesticLifetimeGross}</p>
                                        <p><strong>Foreign Gross$:</strong> {movie?.foreignLifetimeGross}</p>
                                        <p><strong>World Wide Gross$:</strong> {movie?.worldwideLifetimeGross}</p>
                                        <p><strong>Year Released:</strong> {movie?.year}</p>
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

export default BoxOffice