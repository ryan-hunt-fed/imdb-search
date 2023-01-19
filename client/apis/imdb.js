import request from "superagent"
import IMDB_Key from '../../info.js'

export function allSearch(data) {
    return request.get('https://imdb-api.com/en/API/SearchAll/' + IMDB_Key + '/' + data)
    .then( res => {
        console.log('all search', res.body.results)
        return res.body.results
    })
}

export function searchMovie(movie) {
    return request.get('https://imdb-api.com/en/API/SearchMovie/' + IMDB_Key + '/' + movie)
    .then( res => {
        console.log('api', res.body)
        return res.body.results
    })
}


export function popularMovies() {
    return request.get('https://imdb-api.com/en/API/MostPopularMovies/' + IMDB_Key)
    .then (res => {
        console.log('top from api',res.body.items)
        return res.body.items
    })
}

export function searchTv(tv) {
    return request.get('https://imdb-api.com/en/API/SearchSeries/' + IMDB_Key + '/' + tv)
    .then( res => {
        console.log('api', res.body)
        return res.body.results
    })
}

export function popularTv() {
    return request.get('https://imdb-api.com/en/API/MostPopularTvs/' + IMDB_Key)
    .then (res => {
        console.log('top tv from api',res.body.items)
        return res.body.items
    })
}

export function searchPeople(people) {
    return request.get('https://imdb-api.com/en/API/SearchName/' + IMDB_Key + '/' + people)
    .then(res => {
        console.log(res.body)
        return res.body.results
    })
}

export function weekendBoxOffice() {
    return request.get('https://imdb-api.com/en/API/BoxOffice/' + IMDB_Key)
    .then(res => {
        console.log('weekBox', res.body)
        return res.body.items
    })
}

export function allBoxOffice() {
    return request.get('https://imdb-api.com/en/API/BoxOfficeAllTime/' + IMDB_Key)
    .then(res => {
        console.log('allBox', res.body)
        return res.body.items
    })
}

export function inTheaters() {
    return request.get('https://imdb-api.com/en/API/InTheaters/' + IMDB_Key)
    .then(res => {
        console.log('theatres', res.body)
        return res.body.items
    })
}

export function comingSoon() {
    return request.get('https://imdb-api.com/en/API/ComingSoon/' + IMDB_Key)
    .then(res => {
        console.log('comingSoon', res.body)
        return res.body.items
    })
}