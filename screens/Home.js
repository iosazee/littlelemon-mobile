import {View, Text, StyleSheet, Pressable} from 'react-native';


const Home = () => {
    return (
        <View style={homeStyles.container}>
            <Text style={homeStyles.regularText}>Home Page</Text>
        </View>
    )
}

export default Home;

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    regularText: {
        fontSize: 22,
    }
})