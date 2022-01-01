import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'

const { height } = Dimensions.get('window')

export default function Header({ navigation, menu, title }) {
    return (
        <View style={styles.Container}>
            {
                menu ? <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image source={require('../assets/img/menu.png')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity> : <View />
            }
            <Text style={styles.Heading}>{title}</Text>
            {
                menu ? <View style={{ height: 30, width: 30 }} /> : <View />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: height / 15,
        backgroundColor: '#66bbff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    Heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})
