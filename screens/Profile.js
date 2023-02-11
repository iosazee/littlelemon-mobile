import {View, Text, StyleSheet, Pressable} from 'react-native';


const Profile = () => {
    return (
        <View style={profileStyles.container}>
            <Text style={profileStyles.regularText}>Profile Page</Text>
        </View>
    )
}

export default Profile;

const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    regularText: {
        fontSize: 22,
    }
})