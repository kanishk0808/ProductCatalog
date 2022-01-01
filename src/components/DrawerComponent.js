import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, TouchableNativeFeedback, ScrollView, Alert, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux'

const DrawerComponent = ({ navigation, cartItems }) => {

	const menus = [
		'Products',
		'Cart',
		'Logout',
	];

	const Action = async (type) => {
		navigation.toggleDrawer();

		switch (type) {
			case ('Logout'): {
				Alert.alert('Logout!', 'Are you sure want to logout?', [{
					text: 'Yes',
					onPress: () => navigation.popToTop()
				}, {
					text: 'No',
					onPress: () => null
				}]);
				break;
			}
			case ('Products'): {
				navigation.navigate('Products');
				navigation.closeDrawer();
				break;
			}
			case ('Cart'): {
				navigation.navigate('Cart');
				navigation.closeDrawer();
				break;
			}
		}
	}

	return (
		<SafeAreaView style={Styles.SafeAreaContainer}>
			<ScrollView contentContainerStyle={Styles.MenuContainer} showsHorizontalScrollIndicator={false}>
				<View>

					{/* Menu Items */}
					{
						menus.map((menu, index) => {
							return (
								<TouchableOpacity key={index} delayPressIn={0} onPress={() => Action(menu)}>
									<View style={Styles.MenuItemContainer}>
										<Text style={Styles.MenuItem}>{menu}</Text>
										{menu === 'Cart' ? <View style={Styles.CartCount}>
											<Text style={{ color: '#fff' }}>{cartItems.length}</Text>
										</View> : null}
									</View>
								</TouchableOpacity>
							)
						})
					}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const Styles = StyleSheet.create({
	SafeAreaContainer: {
		flex: 1,
		backgroundColor: '#ffffff'
	},
	MenuItemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 18,
		paddingVertical: 20,
		borderBottomWidth: 1,
		borderColor: '#ceced4'
	},
	MenuContainer: {
		flexGrow: 1,
		justifyContent: 'space-between'
	},
	MenuItem: {
		color: '#1e394d',
		fontSize: 16,
		marginLeft: 15
	},
	CartCount: {
		height: 20,
		width: 20,
		backgroundColor: 'tomato',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const mapStateToProps = state => {
	return {
		cartItems: state
	}
}

export default connect(mapStateToProps)(DrawerComponent);