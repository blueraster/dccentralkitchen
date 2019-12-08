import React from 'react';
import { AsyncStorage } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../screens/auth/LoginScreen';
import SignInScreen from '../screens/auth/SignUpScreen';

import { StoresStack, RewardsStack, AnnounceStack } from './StackNavigators';

// TODO @JohnathanZhou should be either SignUpScreen or SignInScreen for consistency?
const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  Login: LoginScreen
});

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userId');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return null;
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Stores: {
    screen: StoresStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Stores'
    })
  },
  Rewards: {
    screen: RewardsStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Your Profile'
    })
  },
  // TODO change the name of Announcements to News (?) across app & Airtable
  Announcements: {
    screen: AnnounceStack,
    navigationOptions: ({ navigation }) => ({
      title: 'News'
    })
  }
});

export default createAppContainer(
  createSwitchNavigator(
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    {
      AuthLoading: AuthLoadingScreen,
      App: {
        screen: MyDrawerNavigator
      },
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
