import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import useMoviesDetails from '../hooks/useMoviesDetails';
import MovieDetails from '../components/MovieDetails';
import { useNavigation } from '@react-navigation/native';

interface DetailsScreenProps extends NativeStackScreenProps<RootStackParams, 'DetailsScreen'> { }
const screenHeight = Dimensions.get('screen').height

const DetailsScreen = ({ route }: DetailsScreenProps) => {

    const movie = route.params;
    let uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;


    const { cast, isLoading, movieFull } = useMoviesDetails(movie.id);

    const navigation = useNavigation();

    return (
        <ScrollView>
            <Icon
                name='arrow-back-outline'
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    backgroundColor: 'white',
                    color: 'black',
                    width: 50,
                    height: 50,
                    lineHeight: 50,
                    textAlign: 'center',
                    borderRadius: 25,
                    fontSize: 30,
                    zIndex: 1,
                    shadowColor: 'gray',
                    shadowOffset: { width: 20, height: 20 },
                    shadowOpacity: 0.86,
                    shadowRadius: 10,
                }}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image style={styles.posterImage} source={{ uri }} />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            {isLoading ?
                <ActivityIndicator size={35} color="gray" style={{ marginTop: 20 }} /> :
                <MovieDetails movieFull={movieFull} cast={cast} />}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 35,
        borderBottomStartRadius: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.44,
        shadowRadius: 10,
        elevation: 10,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    }
})

export default DetailsScreen