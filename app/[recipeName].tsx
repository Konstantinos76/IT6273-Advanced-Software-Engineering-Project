import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions, } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { theme } from "../theme";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Params = { 
    recipeName: string; 
    imageURL: string; 
    preparationTime: string; 
    difficulty: string; 
    ingredients: string; 
    preparationSteps: string; 
    productName: string; 
    productImageURL: string; 
    wayOfCooking: string; 
    tip: string; 
};

export default function RecipeDetailView() {
    const local = useLocalSearchParams<Params>();

    const { width } = useWindowDimensions();
    const imageWidth = width-40;
    const imageHeight = imageWidth;

    const recipeImages:{ [key: string]: any } = { 
        '../assets/images/chicken-fajitas-with-guacamole.jpg': (require('../assets/images/chicken-fajitas-with-guacamole.jpg')),
        '../assets/images/stir-fry-with-chicken.jpg': (require('../assets/images/stir-fry-with-chicken.jpg')),
        '../assets/images/stuffed-chicken-with-manouri-and-gruyere-cheese.jpg': (require('../assets/images/stuffed-chicken-with-manouri-and-gruyere-cheese.jpg')),
        '../assets/images/chicken-ragu.jpg': (require('../assets/images/chicken-ragu.jpg')),
        '../assets/images/chicken-drumsticks-with-honey.jpg': (require('../assets/images/chicken-drumsticks-with-honey.jpg')),
        '../assets/images/chicken-drumsticks-with-noodles.jpg': (require('../assets/images/chicken-drumsticks-with-noodles.jpg')),
        '../assets/images/chicken-drumsticks-in-peanut-sauce-satay.jpg': (require('../assets/images/chicken-drumsticks-in-peanut-sauce-satay.jpg')),
        '../assets/images/exotic-chicken-fillet-with-coconut-milk-sun-dried-tomatoes-and-spinach.jpg': (require('../assets/images/exotic-chicken-fillet-with-coconut-milk-sun-dried-tomatoes-and-spinach.jpg')),
        '../assets/images/pappardelle-with-chicken-ragout.jpg': (require('../assets/images/pappardelle-with-chicken-ragout.jpg')),
        '../assets/images/spicy-schnitzel-with-jasmine-rice-and-curry-sauce.jpg': (require('../assets/images/spicy-schnitzel-with-jasmine-rice-and-curry-sauce.jpg')),
    };

    const productImages:{ [key: string]: any } = { 
        '../assets/images/products/chicken-breast-fillet.png': (require('../assets/images/products/chicken-breast-fillet.png')),
        '../assets/images/products/chicken-drumsticks.png': (require('../assets/images/products/chicken-drumsticks.png')),
        '../assets/images/products/chicken-legs.png': (require('../assets/images/products/chicken-legs.png')),
        '../assets/images/products/chicken-thigh-fillet.png': (require('../assets/images/products/chicken-thigh-fillet.png')),
        '../assets/images/products/spicy-chicken-schnitzel.png': (require('../assets/images/products/spicy-chicken-schnitzel.png')),
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={[styles.image, { width: imageWidth, height: imageHeight }]}
                    source={recipeImages[local.imageURL]}
                />
                <Text style={styles.recipeTitle}>{local.recipeName}</Text>
                <Image
                    style={[styles.productImage, { width: 180, height: 180 }]}
                    source={productImages[local.productImageURL]}
                />
                <Text style={styles.text}>This recipe is made with:</Text>
                <Text style={styles.productTitle}>{local.productName}</Text>
                <View style={styles.infoArea}>
                    <MaterialIcons name="timer" size={21} color={theme.colorBrandBlue} />
                    <Text style={styles.infoAreaText}>Ready in <Text style={styles.info}>{local.preparationTime}</Text> min</Text>
                    <Text style={styles.infoAreaText}>Difficult to cook? It's <Text style={styles.info}>{local.difficulty}</Text></Text>
                    <Text style={styles.infoAreaText}>Way of Cooking <Text style={styles.info}>{local.wayOfCooking}</Text></Text>
                </View>
                <Text style={styles.ingredientsTitle}>Ingredients:</Text>
                <Text style={styles.ingredientsText}>{local.ingredients}</Text>
                <Text style={styles.preparationTitle}>Preparation:</Text>
                <Text style={styles.preparationText}>{local.preparationSteps}</Text>
                <Text>{local.tip}</Text>
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
        height: 120,
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
    ingredientsTitle: {
        color: theme.colorWhite,
        fontSize: 24,
        padding:8,
    },
    ingredientsText: {
        color: theme.colorWhite,
        fontSize: 16,
        padding:8,
    },
    preparationTitle: {
        color: theme.colorWhite,
        fontSize: 24,
        padding:8,
    },
    preparationText: {
        color: theme.colorWhite,
        fontSize: 16,
        paddingVertical:8,
        paddingHorizontal: 16,
    },
    text: {
        color: theme.colorWhite,
        fontSize: 16,
        marginBottom: 10,
    },
  });
  