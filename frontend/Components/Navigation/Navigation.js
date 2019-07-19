import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import FollowingScreen from '../Screens/FollowingScreen';
import SearchScreen from '../Screens/SearchScreen';
import AccountScreen from '../Screens/AccountScreen';
import HomeScreen from '../Screens/HomeScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';

var BottomNavigator = createBottomTabNavigator(
	{
		Account: AccountScreen,
		Search: SearchScreen,
		Following: FollowingScreen
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				var iconName;
				if (navigation.state.routeName == 'Account') {
					iconName = 'ios-information-circle';
				} else if (navigation.state.routeName == 'Search') {
					iconName = 'ios-search';
				} else if (navigation.state.routeName == 'Following') {
					iconName = 'ios-people';
				}

				return <Ionicons name={iconName} size={25} color={tintColor} />;
			}
		}),
		tabBarOptions: {
			activeTintColor: 'black',
			inactiveTintColor: 'gray'
		}
	}
);
var StackNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		SignIn: SignInScreen,
		SignUp: SignUpScreen,
		BottomNavigator: BottomNavigator
	},
	{ headerMode: 'none' }
);

export default (Navigation = createAppContainer(StackNavigator));
