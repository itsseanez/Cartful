import {View, Text, StyleSheet} from 'react-native';

//Colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#55844F",
    brand: "#698269"
};

const {primary, secondary, brand} = Colors;

export const styles = StyleSheet.create({
    button: {
        backgroundColor: `${brand}`,
        width: '80%',
        borderRadius: 8,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems:'center',
        marginBottom: 30
    },

    text: {
        color: `${primary}`,
        fontSize: '24px'
    },

    container: {
        flex: 1,
        backgroundColor: `${primary}`,
        alignItems: 'center'
    },
  
    innerContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
  
    pageTitle: {
        fontSize: '36px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: `${brand}`,
        padding: 10,
    },

    pageSubTitle: {
        fontSize: '26px',
        textAlign: 'center',
        color: `${secondary}`,
        padding: 10,
        paddingTop: 140
    },

    formComponent: {
        marginTop: 20,
        fontSize: '24px',
        padding: 20,
        borderColor: `${secondary}`,
        borderWidth: 1,
        width: '80%',
        justifyContent: 'center',
    }
  });
