import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Components/Navigation/Navigation';
import { Provider } from 'react-redux';
import contactList from './Components/Reducers/contact.reducer';
import user from './Components/Reducers/user.reducer';
import { createStore, combineReducers } from 'redux';
const store = createStore(combineReducers({ contactList, user }));
export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Navigation />
			</Provider>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1c40f',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
