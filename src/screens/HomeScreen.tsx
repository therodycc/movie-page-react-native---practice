import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import HorizontalSlider from '../components/HorizontalSlider';
import MoviePoster from '../components/MoviePoster';
import { GradientContext } from '../context/GradientContext';
import { getImageColors } from '../helpers/getColores';
import useMovies from '../hooks/useMovies';
import { MovieI } from '../interfaces/movies.interface';

const { width: windowDimension } = Dimensions.get('window')

const HomeScreen = () => {
    const { nowPlaying, popularMovies, topRatedMovies, upcomingMovies, loading } = useMovies()
    const { top } = useSafeAreaInsets()

    const { setMainColors } = useContext(GradientContext)

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
        setMainColors({ primary, secondary })
    }

    useEffect(() => {
        if (nowPlaying?.length > 0) {
            getPosterColors(0)
        }
    }, [nowPlaying])

    if (loading) return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator color="red" size={100} />
        </View>
    )

    return (
        <GradientBackground>
            <ScrollView style={{ marginTop: top + 10 }}>
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: { item: MovieI }) => (<MoviePoster movie={item} />)}
                        sliderWidth={windowDimension}
                        itemWidth={300}
                        inactiveSlideOpacity={0.95}
                        onSnapToItem={index => getPosterColors(index)}
                    />
                </View>
                <HorizontalSlider title={'Popular'} movies={popularMovies} />
                <HorizontalSlider title={'Top Rates'} movies={topRatedMovies} />
                <HorizontalSlider title={'Upcoming'} movies={upcomingMovies} />

            </ScrollView>
        </GradientBackground>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
export default HomeScreen