import * as React from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';

const IconPath = {
    'Products': {
        active: require('../assets/img/list-blue.png'),
        inactive: require('../assets/img/list-grey.png')
    },
    'Cart': {
        active: require('../assets/img/cart-blue.png'),
        inactive: require('../assets/img/cart-grey.png')
    }
}

function TabBar({ state, descriptors, navigation, cartItems }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        key={index}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            height: 70,
                            backgroundColor: '#cccccc',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 0.5,
                            borderColor: '#ffffff',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                        }}
                    >
                        {
                            label === 'Cart' ? <View style={{
                                position: 'absolute',
                                height: 20,
                                width: 20,
                                borderRadius: 10,
                                backgroundColor: '#FF6347bb',
                                justifyContent: 'center',
                                alignItems: 'center',
                                top: 5,
                                right: Dimensions.get('window').width / 4 - 20,
                                zIndex: 1
                            }} >
                                <Text>{cartItems.length}</Text>
                            </View> : null
                        }
                        <Image source={IconPath[label][isFocused ? 'active' : 'inactive']} />
                        <Text style={{ color: isFocused ? '#66bbff' : '#222' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const mapStateToProps = state => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(TabBar); 