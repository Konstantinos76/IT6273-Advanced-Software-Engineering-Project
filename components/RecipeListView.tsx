import React from 'react';
import { View, Text, Image, FlatList, Pressable, StyleSheet } from 'react-native';
import { recipes } from '../data/recipes'; // Importing the recipes array
import { theme } from "../theme";

type Recipe = { 
    name: string; 
    preparationTime: number; 
    difficulty: 'easy' | 'medium' | 'difficult'; 
    image: object;
};

export function RecipeListView() {
    const renderItem = ({ item }: { item: Recipe }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>Time: {item.preparationTime} min</Text>
            <Text style={styles.details}>Difficulty: {item.difficulty}</Text>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>View Recipe</Text>
            </Pressable>
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
        borderBottomColor: theme.colorLightGray,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 21,
        fontWeight: 'bold',
        color: theme.colorWhite,
        margin: 10,
    },
    details: {
        fontSize: 16,
        color: theme.colorWhite,
        margin: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: theme.colorBrandGreen,
        margin: 10,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: theme.colorWhite,
    },
});