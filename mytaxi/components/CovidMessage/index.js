import React from 'react';
import { Text,View } from 'react-native';
import styles from "./Style"

const CovidMessage = () => {
    return (
       
        <View style={styles.container}>
            <Text style={styles.title}>Voyagez que si c'est nécéssaire</Text>
            <Text style={styles.text} >Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
            <Text style={styles.learnMore} >En savoir plus</Text>
        </View>
    );
};
export default CovidMessage;