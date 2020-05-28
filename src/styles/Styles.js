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
<<<<<<< HEAD

    foto: {
        width: 150,
        height:180,
        alignSelf: 'center',
        borderColor: 'red',
        borderRadius: 55
    },
=======
>>>>>>> bb89553890d0d78025cedaec0bfa622451c88289
    textWithShadow: {
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }
<<<<<<< HEAD

=======
>>>>>>> bb89553890d0d78025cedaec0bfa622451c88289
});

export default styles;