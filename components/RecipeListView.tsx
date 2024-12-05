import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { recipes } from '../recipes'; // Importing the recipes array
import { theme } from "../theme";

type Recipe = { 
    name: string; 
    preparationTime: number; 
    difficulty: 'easy' | 'medium' | 'difficult'; 
    // image: string; // Image property is a string (path) 
};

// Function declaration format 
export function RecipeListView() {
    const renderItem = ({ item }: { item: Recipe }) => (
        <View style={styles.itemContainer}>
            {/* <Image source={item.image} style={styles.image} /> */}
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
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
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