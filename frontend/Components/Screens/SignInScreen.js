import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
class SignInScreen extends React.Component {
	constructor() {
		super();
		this.state = { email: '', password: '', errorMessage: '' };
	}
	handleSubmit = () => {
		console.log('signin from front handled...');

		fetch(`${url}/signin?email=${this.state.email}&password=${this.state.password}`)
			.then((res, err) => res.json())
			.then((user) => {
				console.log(user);
				user.isUserExist
					? (this.props.handleUserValid(user.user.last_name, user.user.first_name, user.user.email),
						this.props.navigation.navigate('Account'))
					: this.setState({ errorMessage: 'Wrong credentials, try again...' });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<View style={styles.container}>
				<FormLabel>Email</FormLabel>
				<FormInput onChangeText={(value) => this.setState({ email: value })} value={this.state.email} />
				<FormLabel>Password</FormLabel>
				<FormInput onChangeText={(value) => this.setState({ password: value })} value={this.state.password} />
				<Divider style={{ height: 20 }} />
				<FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
				<Button
					style={{ width: 100, marginTop: 20 }}
					title="Sign Up"
					backgroundColor="#3498db"
					onPress={this.handleSubmit}
				/>
			</View>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleUserValid: function(nameUser, firstNameUser, emailUser) {
			dispatch({
				type: 'setUserData',
				name: nameUser,
				firstName: firstNameUser,
				email: emailUser
			});
		}
	};
}
export default connect(null, mapDispatchToProps)(SignInScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ecf0f1',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
