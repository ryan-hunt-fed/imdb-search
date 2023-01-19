import React, { useState, } from 'react'

// import { Link } from 'react-router-dom'

import { allSearch } from '../apis/imdb'

import Scroller from './Scroller'

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
            <Scroller />


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
            <section>
                <div className='search-container'>
                    {recieveData.map((movie, idx) => {

                        return (
                            <>
                                {/* <Link to={`/:${movie.id}`}> */}
                                <div className='search-items' key={idx}>
                                    <img src={movie?.image} alt={movie?.title} />
                                    <p>{movie?.title}</p>
                                    <p>{movie?.description}</p>
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

export default LandingPage