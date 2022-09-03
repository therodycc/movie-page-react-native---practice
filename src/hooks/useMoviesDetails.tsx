import React, { useEffect, useState } from 'react'
import { moviesDB } from '../api/movies'
import { MovieFullI } from '../interfaces/movies.interface'
import { CreditsResponseI } from '../interfaces/credits.interface';

interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFullI
    cast: any[]
}
const useMoviesDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    useEffect(() => {
        getMovieDetails()
    }, []);

    const getMovieDetails = async () => {
        const [movie, credits] = await Promise.all([
            moviesDB.get<MovieFullI>('/movie/' + movieId),
            moviesDB.get<CreditsResponseI>('/movie/' + movieId + '/credits')]
        )
        setState({
            isLoading: false,
            movieFull: movie.data,
            cast: credits.data.cast
        })
    }


    return { ...state }
}

export default useMoviesDetails