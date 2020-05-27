import { StyleSheet } from 'react-native';

const background = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        justifyContent: "center"
    },
});

export default background;