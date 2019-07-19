import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import url from '../../config';
import { connect } from 'react-redux';
class SignUpScreen extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		};
	}

	handleSubmit() {
		console.log('Signup from front hanled..');

		var signupData = JSON.stringify({
			first_name: this.state.firstName,
			last_name: this.state.lastName,
			email: this.state.email,
			password: this.state.password
		});
		const ctx = this;
		fetch(`${url}/signup`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: signupData
		})
			.then(function(res, err) {
				return res.json();
			})
			.then(function(data) {
				console.log(data);
				ctx.props.handleUserValid(data.user.last_name, data.user.first_name, data.user.email);
				ctx.props.navigation.navigate('Account');
			})
			.catch(function(err) {
				console.log(err);
			});
	}
	render() {
		return (
			<View style={styles.container}>
				<FormLabel>First Name</FormLabel>
				<FormInput onChangeText={(value) => this.setState({ firstName: value })} value={this.state.firstName} />
				<FormLabel>Last Name</FormLabel>
				<FormInput onChangeText={(value) => this.setState({ lastName: value })} value={this.state.lastName} />
				<FormLabel>Email</FormLabel>
				<FormInput onChangeText={(value) => this.setState({ email: value })} value={this.state.email} />
				<FormLabel>Password</FormLabel>
				<FormInput onChangeText={(value) => this.setState({ password: value })} value={this.state.password} />

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

export default connect(null, mapDispatchToProps)(SignUpScreen);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ecf0f1',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
