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
        justifyContent:"flex-start",
        width:500,
        height:10,
    },
    foto: {
        width: 150,
        height:180,
        alignSelf: 'center',
        borderColor: 'red',
        borderRadius: 55
    },
});

export default styles;