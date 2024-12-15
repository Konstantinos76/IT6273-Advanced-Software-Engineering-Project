import { View, Text} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function RecipeDetailView() {
    const local = useLocalSearchParams();
    return(
        <View>
            <Text>{local.recipeName}</Text>
        </View>
    )
}