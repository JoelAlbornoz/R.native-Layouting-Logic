import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colors from './../constants/colors'

const Header = props => {
    return (
        <View style={styles.header} >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
        
    )
}

styles = StyleSheet.create({
    header:{
        width:'100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: 'black',
        fontSize: 24,
    }
});

export default Header;