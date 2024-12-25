import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions, } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { theme } from "../theme";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';


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

    const recipeImages: { [key: string]: any } = {
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

    const productImages: { [key: string]: any } = {
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
                    <View style={styles.infoAreaRow}>
                        <MaterialIcons name="timer" size={18} color={theme.colorBrandBlue} />
                        <Text style={styles.infoAreaText}> Ready in<Text style={styles.info}> {local.preparationTime} min</Text></Text>
                    </View>
                    <View style={styles.infoAreaRow}>
                        {getDifficultyIcon(local.difficulty)}
                        <Text style={styles.infoAreaText}> Difficulty: <Text style={styles.info}>{local.difficulty}</Text></Text>
                    </View>
                    <View style={styles.infoAreaRow}>
                        <MaterialCommunityIcons name="pot-steam" size={18} color={theme.colorBrandBlue} />
                        <Text style={styles.infoAreaText}> Cooking Category: <Text style={styles.info}> {local.wayOfCooking}</Text></Text>
                    </View>
                </View>
                <View style={styles.ingredientsArea}>
                    <Text style={styles.ingredientsTitle}>Ingredients:</Text>
                    <Text style={styles.ingredientsText}>{local.ingredients}</Text>
                </View>
                <View style={styles.preparationArea}>
                    <Text style={styles.preparationTitle}>Preparation:</Text>
                    <Text style={styles.preparationText}>{local.preparationSteps}</Text>
                </View>
                {local.tip !== "" && (
                <View style={styles.tipArea}>
                    <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" size={18} color={theme.colorBrandBlueDarker} />
                    <Text style={styles.tipText}> {local.tip}</Text>
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
