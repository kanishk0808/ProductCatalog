import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'

export default function ProductComponent({ product, onPress, cart }) {
    return (
        <View style={styles.Container}>
            <Text style={styles.ProductLabel}>{product.name}</Text>
            <TouchableOpacity onPress={() => onPress(product)}>
                {
                    cart === true ? <Image source={require('../assets/img/trash.png')} style={styles.Image} /> :
                        <Image source={require('../assets/img/plus.png')} style={styles.Image} />
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Dimensions.get('window').height / 7,
        padding: 15,
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: '#555'
    },
    Image: {
        padding: 20,
        height: 15,
        width: 15
    },
    ProductLabel: {
        color: '#777777',
        fontSize: 20
    }
})
