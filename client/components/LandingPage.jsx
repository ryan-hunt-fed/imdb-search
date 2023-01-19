import React, { useState, } from 'react'

// import { Link } from 'react-router-dom'

import { allSearch } from '../apis/imdb'



function LandingPage() {

    const [getData, setGetData] = useState('')
    const [recieveData, setRecieveData] = useState([])




    const searchHandle = async (evt) => {
        evt.preventDefault()
        const searchData = await allSearch(getData)
        setRecieveData(searchData)
        console.log(recieveData)
    }

    const typeHandle = (evt) => {
        setGetData(evt.target.value)
        console.log('handle', getData)
    }


    return (
        <>
            <section className='land-header'>
                {/* <img src='' /> */}
                <h1 id='main-title'>Media Inspiration & Search</h1>
                {/* <img src='./images/cinema-seats-v1.png' alt='cinema' id='chairs-front' /> */}
                <div>
                    <p className='intro-text'>Stuck for something to watch or looking for something new, have a look at what is currently popular and the most popular in recent years and what is yet to come.</p>
                    <p className='intro-text'>If you have something speficic or want to look up actors for information, use the search below.</p>

                </div>

            </section>
            <div></div>

            <section className='black-section'>
                <div className='form-container'>
                    {/* <h1>Search</h1> */}
                    <form onSubmit={searchHandle}>
                        <label htmlFor='search'></label>
                        <input type='text' id='search' onChange={typeHandle} value={getData}></input>
                        <button>Search</button>
                    </form>
                </div>
            </section>
            <section className='search-data'>
                <div className='media-container'>
                    {recieveData.map((movie, idx) => {

                        return (
                            <>
                                <div className='media-box'>
                                    {/* <Link to={`/:${movie.id}`}> */}
                                    <div className='media-items' key={idx}>
                                        <div className='media-image-box'>
                                            <img src={movie?.image} alt={movie?.title} />
                                        </div>
                                        <div className='media-content-box'>
                                            <div className='media-content-box-child'>
                                                <p>{movie?.title}</p>
                                                <p>{movie?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </>


                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default LandingPage