import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { List, ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
class FollowingScreen extends React.Component {
	render() {
		var contactListItem = this.props.contact.map((user, i) => {
			return (
				<ListItem
					key={i}
					avatar={
						<Avatar
							small
							rounded
							title={user.title}
							overlayContainerStyle={{ backgroundColor: user.color }}
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
				<SafeAreaView>
					<List>
						{this.props.contact.length < 1 ? (
							<Text style={{ textAlign: 'center' }}>You are not following any contact yet</Text>
						) : (
							contactListItem.reverse()
						)}
					</List>
				</SafeAreaView>
			</ScrollView>
		);
	}
}

function mapStateToProps(state) {
	return { contact: state.contactList };
}

export default connect(mapStateToProps, null)(FollowingScreen);

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
