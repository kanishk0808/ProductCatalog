import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Button({ title, navigation, onPress }) {
    return (
        <TouchableOpacity style={styles.Container} onPress={onPress}>
            <Text style={styles.ButtonLabel}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#66bbff',
        alignSelf: 'stretch',
        margin: 10,
        borderRadius: 5
    },
    ButtonLabel: {
        color: '#FFFFFF'
    }
})
