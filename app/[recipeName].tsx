import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions, } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { recipes } from '../data/recipes'; // Importing the recipes array
import { theme } from "../theme";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
// import AntDesign from '@expo/vector-icons/AntDesign';

type Params = {
    id: string;
};

export default function RecipeDetailView() {
    const local = useLocalSearchParams<Params>();
    // Find the recipe by ID 
    const recipe = recipes.find((r) => r.id === local.id);

    if (!recipe) { 
        return <Text>No recipe found!</Text>;
    }

    const { width } = useWindowDimensions();
    const imageWidth = width - 40;
    const imageHeight = imageWidth;

    const getDifficultyIcon = (difficulty: string) => {
        switch (difficulty) {
            case 'easy': return <Entypo name="progress-one" size={18} color={theme.colorBrandBlue} />;
            case 'medium': return <Entypo name="progress-two" size={18} color={theme.colorBrandBlue} />;
            case 'difficult': return <Entypo name="progress-full" size={18} color={theme.colorBrandBlue} />;
            default: return null;
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={[styles.image, { width: imageWidth, height: imageHeight }]}
                    source={recipe.image}
                />
                <Text style={styles.recipeTitle}>{recipe.name}</Text>
                <Image
                    style={[styles.productImage, { width: 180, height: 180 }]}
                    source={recipe.productImage}
                />
                <Text style={styles.text}>This recipe is made with:</Text>
                <Text style={styles.productTitle}>{recipe.productName}</Text>
                <View style={styles.infoArea}>
                    <View style={styles.infoAreaRow}>
                        <MaterialIcons name="timer" size={18} color={theme.colorBrandBlue} />
                        <Text style={styles.infoAreaText}> Ready in<Text style={styles.info}> {recipe.readyAt} min</Text></Text>
                    </View>
                    <View style={styles.infoAreaRow}>
                        {getDifficultyIcon(recipe.difficulty)}
                        <Text style={styles.infoAreaText}> Difficulty: <Text style={styles.info}>{recipe.difficulty}</Text></Text>
                    </View>
                    <View style={styles.infoAreaRow}>
                        <MaterialCommunityIcons name="pot-steam" size={18} color={theme.colorBrandBlue} />
                        <Text style={styles.infoAreaText}> Cooking Category: <Text style={styles.info}>{recipe.wayOfCooking}</Text></Text>
                    </View>
                </View>
                <View style={styles.ingredientsArea}>
                    <Text style={styles.ingredientsTitle}>Ingredients:</Text>
                    <Text style={styles.ingredientsText}>{recipe.ingredients}</Text>
                </View>
                <View style={styles.preparationArea}>
                    <Text style={styles.preparationTitle}>Preparation:</Text>
                    <Text style={styles.preparationText}>{recipe.preparationSteps}</Text>
                </View>
                {recipe.tip !== "" && (
                <View style={styles.tipArea}>
                    <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" size={18} color={theme.colorBrandBlueDarker} />
                    <Text style={styles.tipText}> {recipe.tip}</Text>
                </View>
                )}
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorBrandBlue,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    image: {
        maxWidth: 500,
        maxHeight: 500,
        resizeMode: 'contain',
        borderRadius: 8,
        marginBottom: 20,
    },
    productImage: {
        maxWidth: 250,
        maxHeight: 250,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    recipeTitle: {
        color: theme.colorWhite,
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    productTitle: {
        color: theme.colorWhite,
        fontSize: 24,
        backgroundColor: theme.colorBrandGreen,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    infoArea: {
        width: '100%',
        height: 130,
        backgroundColor: theme.colorBrandYellow,
        alignItems: 'center',
        padding: 16,
        marginVertical: 20,
    },
    info: {
        color: theme.colorBrandBlue,
        fontSize: 18,
        fontWeight: '700',
    },
    infoAreaText: {
        color: theme.colorBrandBlue,
        fontSize: 18,
        fontWeight: '400',
    },
    infoAreaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
    },
    ingredientsArea: {
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: theme.colorWhite,
    },
    ingredientsTitle: {
        color: theme.colorWhite,
        fontSize: 24,
        padding: 8,
    },
    ingredientsText: {
        color: theme.colorWhite,
        fontSize: 16,
        padding: 8,
    },
    preparationArea: {
        padding: 20,
    },
    preparationTitle: {
        color: theme.colorWhite,
        fontSize: 24,
    },
    preparationText: {
        color: theme.colorWhite,
        fontSize: 16,
        paddingVertical: 8,
    },
    tipArea: {
        flexDirection: 'row',
        backgroundColor: theme.colorBrandLightGreen,
        padding: 16,
        margin: 10,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 8,
        alignItems: 'flex-start',
    },
    tipText: {
        color: theme.colorBrandBlueDarker,
        fontSize: 16,
        marginHorizontal: 5,
    },
    text: {
        color: theme.colorWhite,
        fontSize: 16,
        marginBottom: 10,
    },
});
