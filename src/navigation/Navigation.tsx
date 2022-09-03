import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { MovieI } from '../interfaces/movies.interface';


export type RootStackParams = {
    HomeScreen: undefined;
    DetailsScreen: MovieI
}


const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white',
                },
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
    )
}
