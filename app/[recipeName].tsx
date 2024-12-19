import { ScrollView, Text, Image, StyleSheet, useWindowDimensions, } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

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
    const imageWidth = width;
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
        <ScrollView style={styles.container}>
            <Image
                style={[styles.image, { width: imageWidth, height: imageHeight }]}
                source={recipeImages[local.imageURL]}
            />
            <Text>{local.recipeName}</Text>
            <Image
                style={[styles.productImage, { width: 200, height: 200 }]}
                source={productImages[local.productImageURL]}
            />
            <Text>{local.productName}</Text>
            <Text>{local.preparationTime}</Text>
            <Text>{local.difficulty}</Text>
            <Text>{local.ingredients}</Text>
            <Text>{local.preparationSteps}</Text>
            <Text>{local.wayOfCooking}</Text>
            <Text>{local.tip}</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        maxWidth: 500,
        maxHeight: 500,
        resizeMode: 'contain',
    },
    productImage: {
        maxWidth: 200,
        maxHeight: 200,
        resizeMode: 'contain',
    },
  });
  