import { useEffect, useState } from 'react';
import { moviesDB } from '../api/movies';
import { MoviesResponseI } from '../interfaces/movies.interface';

const useMovies = () => {
    const [data, setData] = useState<{
        nowPlaying: null | any,
        popularMovies: null | any,
        topRatedMovies: null | any,
        upcomingMovies: null | any,
    }>({
        nowPlaying: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovies()
    }, []);

    const getMovies = async () => {
        Promise.all([
            moviesDB.get<MoviesResponseI>('/movie/now_playing'),
            moviesDB.get<MoviesResponseI>('/movie/popular'),
            moviesDB.get<MoviesResponseI>('/movie/top_rated'),
            moviesDB.get<MoviesResponseI>('/movie/upcoming'),
        ])
            .then(([nowPlaying, popularMovies, topRatedMovies, upcomingMovies]) => {
                setData({
                    nowPlaying: nowPlaying.data.results,
                    popularMovies: popularMovies.data.results,
                    topRatedMovies: topRatedMovies.data.results,
                    upcomingMovies: upcomingMovies.data.results,
                });
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
            })
    }

    return { loading, ...data }
}

export default useMovies