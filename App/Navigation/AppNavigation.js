import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Colors } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
// Containers
import LaunchScreen from '../Containers/LaunchScreen'
import ChoreListScreen from '../Containers/ChoreListContainer'
import ChartScreen from '../Containers/ChartScreen'
import AddChoreScreen from '../Containers/AddChoreScreen'
// import SettingsScreen from '../Containers/SettingsScreen'
// Components
import TabBarBottom from '../Components/TabBarBottom';
// Styles
import styles from './Styles/NavigationStyles'

export const PrimaryNav = TabNavigator({
  ChoresList: {
    screen: ChoreListScreen,
    navigationOptions: {
      tabBarLabel: null,
      header: null
    }
  },
  AddChore: {
    screen: AddChoreScreen,
    navigationOptions: {
      tabBarLabel: null,
      header: null
    }
  },
  Charts: {
    screen: ChartScreen,
    navigationOptions: {
      tabBarLabel: null,
      header: null
    }
  }
},
  {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    swipeEnabled: false,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      pressOpacity: 0.5,
      activeTintColor: Colors.green,
      inactiveTintColor: Colors.inactiveGray,
      activeBackgroundColor: Colors.tabBarWhite,
      inactiveBackgroundColor: Colors.tabBarWhite,
      headerMode: 'none',
      tabStyle: {
        backgroundColor: Colors.tabBarWhite
      },
      style: {
        backgroundColor: Colors.tabBarWhite
      }
    },
    initialRouteName: 'ChoresList',
      navigationOptions: {
        headerStyle: styles.header
      }
  }
)

export default PrimaryNav
