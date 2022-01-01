import React from 'react'
import { StyleSheet, SafeAreaView, FlatList, Text, View } from 'react-native'
import Header from '../components/Header'
import ProductComponent from '../components/ProductComponent'
import { ProductsList } from '../utils/ProductsList'
import { connect } from 'react-redux'

const Cart = ({ removeItem, cartItems }) => {
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <Header title={'Cart'} />
            {cartItems.length === 0 ? <View style={styles.Container}>
                <Text style={styles.Text}>Cart is empty</Text>
            </View> : <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <ProductComponent cart={true} product={item} onPress={removeItem} />
                )}
                keyExtractor={item => item.id}
            />}
        </SafeAreaView>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        marginBottom: 50
    },
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontSize: 20,
        color: '#66bbff'
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Cart);