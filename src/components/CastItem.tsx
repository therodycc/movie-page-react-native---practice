import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/credits.interface'
interface CastItemPropsI {
    actor: Cast
}
const CastItem = ({ actor }: CastItemPropsI) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor?.profile_path}`;
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{ uri }}
                    style={styles.image} />
                <View>
                    <Text>
                        {actor?.name}
                    </Text>
                    <Text>
                        {actor?.popularity}
                    </Text>
                    <Icon name="analytics-outline" style={{
                        fontSize: 25,
                        color: 'gray',
                    }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 10,
    },
    container: {
        flex: 1,
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 10,
        marginRight: 20,
    }
})

export default CastItem