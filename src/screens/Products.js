import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import Header from '../components/Header'
import ProductComponent from '../components/ProductComponent'
import { ProductsList } from '../utils/ProductsList'
import { connect } from 'react-redux'

const Products = ({ navigation, addItemToCart }) => {
    return (
        <SafeAreaView style={{ marginBottom: 50 }}>
            <Header title={'Products'} menu={true} navigation={navigation} />
            <FlatList
                data={ProductsList}
                renderItem={({ item }) => (
                    <ProductComponent product={item} onPress={addItemToCart} />
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(Products);
