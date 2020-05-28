import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    background: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        justifyContent: "center"
    },
    logo: {
        width: '100%',
        resizeMode: 'contain',
    },

    foto: {
        width: 150,
        height:180,
        alignSelf: 'center',
        borderColor: 'red',
        borderRadius: 55
    },
    textWithShadow: {
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }

});

export default styles;