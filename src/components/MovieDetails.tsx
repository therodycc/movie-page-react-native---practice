import React from 'react'
import { Text, View, FlatList } from 'react-native';
import { Cast } from '../interfaces/credits.interface';
import { MovieFullI } from '../interfaces/movies.interface';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from './CastItem';

interface MovieDetailsPropsI {
    movieFull?: MovieFullI
    cast: Cast[]
}
const MovieDetails = ({ cast, movieFull }: MovieDetailsPropsI) => {
    console.log(JSON.stringify(cast, null, 2))

    return (
        <React.Fragment>
            <View style={{ marginHorizontal: 20, marginTop: 5 }}>
                <View style={{ flexDirection: "row" }}>
                    <Icon
                        name="star-outline"
                        size={20}
                        style={{ fontSize: 18, marginRight: 5 }}
                        color="gray"
                    />
                    <Text>{movieFull?.vote_average}</Text>
                    <Text style={{ marginLeft: 10 }}>
                        - {movieFull?.genres.map(g => g.name).join(", ")}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: 10, width: "100%" }}>
                <FlatList
                    data={cast}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                />
            </View>
        </React.Fragment>
    )
}

export default MovieDetails