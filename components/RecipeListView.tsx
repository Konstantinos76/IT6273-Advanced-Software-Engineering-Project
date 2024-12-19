import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { recipes } from '../data/recipes'; // Importing the recipes array
import { theme } from "../theme";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';

type Recipe = {
    name: string;
    preparationTime: number;
    difficulty: 'easy' | 'medium' | 'difficult';
    image: object;
    imageURL: string;
    productImageURL: string;
    ingredients: string;
    preparationSteps: string;
    productName: string;
    wayOfCooking: string;
    tip?: string;
};

export function RecipeListView() {
    const { width } = useWindowDimensions();
    const imageWidth = width - 50;
    const imageHeight = imageWidth;

    const renderItem = ({ item }: { item: Recipe }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.timer}>
                <MaterialIcons name="timer" size={21} color={theme.colorWhite} />
                <Text style={styles.details}>{item.preparationTime} min</Text>
            </View>
            <Text style={styles.details}>Difficulty: {item.difficulty}</Text>
            <Pressable style={styles.button}>
                <Link href={{
                    pathname: '/[recipeName]',
                    params: {
                        recipeName: item.name,
                        preparationTime: item.preparationTime,
                        difficulty: item.difficulty,
                        ingredients: item.ingredients,
                        preparationSteps: item.preparationSteps,
                        productName: item.productName,
                        imageURL: item.imageURL,
                        productImageURL: item.productImageURL,
                        wayOfCooking: item.wayOfCooking,
                        tip: item.tip,
                    }
                }}>
                    <Text style={styles.buttonText}>View Recipe</Text>
                </Link>
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
        borderBottomWidth: 1,
        borderBottomColor: theme.colorLightGray,
        alignItems: 'center',
        margin: 10,
        padding: 20,
        backgroundColor: theme.colorCerulean,
    },
    image: {
        maxWidth: 500,
        maxHeight: 500,
        borderRadius: 8,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.colorWhite,
        margin: 10,
    },
    details: {
        fontSize: 18,
        color: theme.colorWhite,
        margin: 10,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: theme.colorBrandGreen,
        margin: 10,
    },
    buttonText: {
        fontSize: 21,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: theme.colorWhite,
    },
    timer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});