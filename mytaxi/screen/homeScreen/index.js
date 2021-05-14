import React from 'react';
import { View,Text } from 'react-native';
import HomeMap from "../../components/HomeMap"
import CovidMessage from '../../components/CovidMessage'

const HomeScreen = () => {
    return (
        <View 
           
        >
            <HomeMap/>

            {/* Covid message */}
            <CovidMessage/>

        </View>
    );
};

export default HomeScreen;