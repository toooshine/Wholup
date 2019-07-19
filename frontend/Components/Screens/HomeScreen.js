import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Avatar, Text, Button, Divider } from 'react-native-elements';
export default class HomeScreen extends React.Component {
	render() {
		return (
			<ImageBackground source={require('../../assets/network.jpg')} style={{ width: '100%', height: '100%' }}>
				<View style={styles.container}>
					<Text h1 style={{ color: '#FFFFFF' }}>
						Whol'Up
					</Text>
					<Text h3 style={{ color: '#FFFFFF' }}>
						Start your networking
					</Text>
					<Text h3 style={{ color: '#FFFFFF' }}>
						now and everywhere
					</Text>
					<Button
						title="Sign In"
						style={{ width: 100 }}
						backgroundColor="#3498db"
						onPress={() => this.props.navigation.navigate('SignIn')}
					/>
					<Divider style={{ height: 20 }} />
					<Button
						title="Sign Up"
						style={{ width: 100 }}
						backgroundColor="#3498db"
						onPress={() => this.props.navigation.navigate('SignUp')}
					/>
				</View>
			</ImageBackground>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
