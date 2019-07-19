import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { List, ListItem, Avatar } from 'react-native-elements';
import ipAdress from '../../config';
import { connect } from 'react-redux';

class SearchScreen extends React.Component {
	render() {
		var users = [
			{
				name: 'Emilie Carpenter',
				title: 'EC',
				email: 'contact@gmail.com',
				company: 'Deckow-Crist',
				color: '#e67e22'
			},
			{ name: 'John Doe', title: 'JD', email: 'contact@gmail.com', company: 'Deckow-Crist', color: '#3498db' },
			{
				name: 'Noel Paganelli',
				title: 'NP',
				email: 'contact@gmail.com',
				company: 'Deckow-Crist',
				color: '#16a085'
			}
		];

		var usersList = users.map((user, i) => {
			return (
				<ListItem
					onPress={() => this.props.handleContact(user.name, user.title, user.email, user.company)}
					key={i}
					avatar={
						<Avatar
							small
							rounded
							title={user.title}
							overlayContainerStyle={{ backgroundColor: '#16a085' }}
						/>
					}
					title={user.name}
					subtitle={
						<View style={styles.subtitle}>
							<Text style={styles.ratingText}>{user.email}</Text>
							<Text style={styles.ratingText}> company: {user.company}</Text>
						</View>
					}
				/>
			);
		});
		return (
			<ScrollView style={styles.container}>
				<List>{usersList}</List>
			</ScrollView>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleContact: function(nameContact, titleContact, emailContact, companyContact) {
			dispatch({
				type: 'addcontact',
				name: nameContact,
				title: titleContact,
				email: emailContact,
				company: companyContact
			});
		}
	};
}

export default connect(null, mapDispatchToProps)(SearchScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff'
	},
	subtitle: {
		flexDirection: 'row',
		padding: 10,
		paddingTop: 5
	},
	ratingText: {
		color: 'grey'
	}
});
