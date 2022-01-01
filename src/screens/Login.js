import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, TextInput, View } from 'react-native'
import Button from '../components/Button'
import Header from '../components/Header'

const Login = ({ navigation }) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const submitHandler = () => {
        if (userName === 'Test' && password === 'test') {
            navigation.push('Tabs')
            setError('')
        } else {
            setError('Invalid Username and Passwod')
        }
    }

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <Header title={'Login'} />
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TextInput
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                    placeholder='Username'
                    placeholderTextColor={'#777777'}
                    style={styles.TextInput}
                />
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder='Password'
                    placeholderTextColor={'#777777'}
                    style={styles.TextInput}
                    secureTextEntry={true}
                />
                <Text style={{ color: 'red' }}>{error}</Text>
                <Button title={'Submit'} onPress={submitHandler} />
            </View>
            {/* <Button title='Products' onPress={() => navigation.push('Tabs')} /> */}
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    TextInput: {
        backgroundColor: '#ddeeff',
        alignSelf: 'stretch',
        borderWidth: 0.5,
        borderColor: '#777777',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        color: '#555555'
    }
})
