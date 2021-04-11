import _ from 'lodash'
import React from 'react'
import { Text } from 'react-native'
import {
  createBottomTabNavigator
} from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons } from 'react-native-vector-icons'
import Screen from '../Screen'
import WishListScreen from '../WishListScreen'
import HeaderDropdown from '../HeaderDropdown'
import { WISHLIST_DATA } from '../../wishListData'

const ACTIVE_TAB_COLOR = '#69A6F7'
const INACTIVE_TAB_COLOR = '#aaa'

const headerStyles = {
  headerTintColor: '#fff',
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: ACTIVE_TAB_COLOR,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 }
  }
}

const Icon = ({ name, focused }) => (
  <Ionicons
    name={name}
    size={30}
    color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
  />
)

export default createBottomTabNavigator(
  {
    TAB_WISHLIST: {
      screen: createStackNavigator({
        Wishlist: {
          screen: () => <WishListScreen wishLists={WISHLIST_DATA} />,
          path: '/wishlist/:selectedWishListID',
          navigationOptions: ({ navigation }) => {
            const selectedWishListID = navigation.getParam('selectedWishListID')
            const title = selectedWishListID
              ? WISHLIST_DATA.find(w => w.id === selectedWishListID).label
              : WISHLIST_DATA[0].label

            return {
              headerTitle: () => <HeaderDropdown title={title} />,
              ...headerStyles
            }
          }
        }
      }),
      navigationOptions: ({ navigation }) => {
        const WishListScreen = navigation.state.routes.find(
          obj => obj.routeName === 'Wishlist'
        )

        const isTabBarVisible = _.get(
          WishListScreen,
          'params.isWishListDropdownVisible'
        )

        return {
          tabBarVisible: !isTabBarVisible,
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ focused }) => (
            <Icon name='ios-wallet' focused={focused} />
          )
        }
      }
    },
    TAB_SHOP: {
      screen: createStackNavigator({
        Shop: {
          screen: () => (
            <Screen>
              <Text style={{ textAlign: 'center' }}>Shop Screen</Text>
            </Screen>
          ),
          path: '/shop',
          navigationOptions: {
            title: 'Shop',
            ...headerStyles
          }
        }
      }),
      navigationOptions: {
        tabBarLabel: 'Shop',
        tabBarIcon: ({ focused }) => <Icon name='ios-send' focused={focused} />
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: ACTIVE_TAB_COLOR,
      inactiveTintColor: INACTIVE_TAB_COLOR,
      showLabel: true,
      style: {
        borderTopWidth: 0,
        paddingTop: 3,
        paddingBottom: 4,
        height: 60,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 0 }
      }
    }
  }
)
