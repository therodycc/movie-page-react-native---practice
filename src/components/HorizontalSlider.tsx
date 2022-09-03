import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { MovieI } from '../interfaces/movies.interface';
import MoviePoster from './MoviePoster';

interface HorizontalSliderProps {
    title?: string;
    movies: MovieI[];
}
const HorizontalSlider = ({ title, movies }: HorizontalSliderProps) => {
    return (
        <View>
            <View style={{ height: title ? 260 : 220 }}>
                {title && <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>{title}</Text>}
                <FlatList
                    data={movies}
                    renderItem={({ item }: any) => (<MoviePoster movie={item} stylesCard={{ width: 140, height: 200, margin: 8 }} />)}
                    keyExtractor={(item: MovieI) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default HorizontalSlider