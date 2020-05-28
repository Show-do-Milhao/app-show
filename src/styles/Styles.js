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
    logo:{
        width:'100%',
        resizeMode:'contain',
    },
});

export default styles;