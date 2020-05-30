import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: 'cover', 
        justifyContent: "center",
        height:'100%'
    },
    logo: {
        width: '90%',
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