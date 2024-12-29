import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { recipes } from '../data/recipes'; // Importing the recipes array
import { theme } from "../theme";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

type Recipe = {
    id: string;
    name: string;
    readyAt: number;
    difficulty: 'easy' | 'medium' | 'difficult';
    image: object;
};

export function RecipeListView() {
    const { width } = useWindowDimensions();
    const imageWidth = width - 50;
    const imageHeight = imageWidth;

    const getDifficultyIcon = (difficulty: string) => {
        switch (difficulty) {
            case 'easy': return <Entypo name="progress-one" size={21} color={theme.colorWhite} />;
            case 'medium': return <Entypo name="progress-two" size={21} color={theme.colorWhite} />;
            case 'difficult': return <Entypo name="progress-full" size={21} color={theme.colorWhite} />;
            default: return null;
        }
    };

    const renderItem = ({ item }: { item: Recipe }) => (
        <View style={styles.itemContainer}>
            <Pressable>
                <Link href={{
                    pathname: '/[recipeName]',
                    params: {
                        id: item.id,
                        recipeName: item.name,
                    }
                }}>
                    <Image source={item.image} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
                </Link>
            </Pressable>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.infoRow}>
                <MaterialIcons name="timer" size={18} color={theme.colorWhite} />
                <Text style={styles.infoAreaText}>Ready in <Text style={styles.info}>{item.readyAt} min</Text></Text>
            </View>
            <View style={styles.infoRow}>
                {getDifficultyIcon(item.difficulty)}
                <Text style={styles.infoAreaText}>Difficulty: <Text style={styles.info}>{item.difficulty}</Text></Text>
            </View>
            <Pressable style={styles.button}>
                <Link href={{
                    pathname: '/[recipeName]',
                    params: {
                        id: item.id,
                        recipeName: item.name,
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
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colorWhite,
        margin: 10,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        fontSize: 18,
        color: theme.colorWhite,
        fontWeight: '700',
    },
    infoAreaText: {
        fontSize: 18,
        color: theme.colorWhite,
        margin: 10,
        fontWeight: '400',
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
});