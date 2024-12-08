import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { recipes } from '../data/recipes'; // Importing the recipes array
import { theme } from "../theme";

type Recipe = { 
    name: string; 
    preparationTime: number; 
    difficulty: 'easy' | 'medium' | 'difficult'; 
    image?: object;
};

export function RecipeListView() {
    const renderItem = ({ item }: { item: Recipe }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>Time: {item.preparationTime} min</Text>
            <Text style={styles.details}>Difficulty: {item.difficulty}</Text>
        </View>
    );
    return (
        <FlatList
            data={recipes as Recipe[]}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'column',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colorWhite,
    },
    details: {
        fontSize: 14,
        color: theme.colorWhite,
    }
});