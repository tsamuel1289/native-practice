import React from 'react'
import {View, StyleSheet, Text} from 'react-native'


const Navigation = () => {

    return (
        <View style= {Estilo.navegador}>
            <Text style={Estilo.textoNavegador}>This is a navitation for apps</Text>

        </View>
    )
}

export default Navigation

const Estilo = StyleSheet.create({
    navegador: {
        backgroundColor: 'red',
        marginTop: 20,
        marginBottom: 10,
        padding: 5
    },
    textoNavegador:{
        fontSize: 30
    }

})

 