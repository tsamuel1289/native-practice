import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const NavLow = () => {
    return (
        <View style={Estilo.EstyleView}>

            <Text>Esta es la NavLow</Text>
        </View>
    )
}


export default NavLow

const Estilo = StyleSheet.create({
    EstyleView: {
        backgroundColor: 'green'
    }
})