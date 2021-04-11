import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { View, StyleSheet } from 'react-native'
import Screen from './Screen'
import DropDownCard from './DropDownCard'
import WishListProductCard from './WishListProductCard'
import { GROUP_TYPES } from '../walletData'

const WishListscreen = ({ navigation, wishLists }) => {
  const isWishListDropdownVisible = navigation.getParam('isWishListDropdownVisible')
  const selectedWishListID =
    navigation.getParam('selectedWishListID') || wishLists[0].id
  const wishList = wishLists.find(w => w.id === selectedWishListID)

  const handleSelectWishListCard = id => {
    navigation.setParams({
      selectedWishListID: id,
      isWishListDropdownVisible: !isWishListDropdownVisible
    })
  }

  return (
    <Screen scrollEnabled={!isWishListDropdownVisible}>
      {isWishListDropdownVisible ? (
        <Screen style={styles.wishListCardWrap}>
          {wishLists.map(w => (
            <DropDownCard
              key={w.id}
              id={w.id}
              label={w.label}
              value={w.value}
              type={w.type}
              isSelected={w.id === selectedWishListID}
              onPress={handleSelectWishListCard}
            />
          ))}
        </Screen>
      ) : <View style={styles.card}>
            {wishList.products.map(p=>(
              <WishListProductCard product={p} />
            ))}
          </View>
      }
      
    </Screen>
  )
}

WishListscreen.defaultProps = {
  wishLists: []
}

WishListscreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  wishLists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      type: PropTypes.oneOf(Object.values(GROUP_TYPES)).isRequired,
      message: PropTypes.string,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired
        })
      )
    })
  )
}

const styles = StyleSheet.create({
  wishListCardWrap: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    backgroundColor: 'rgba(100, 100, 100, 0.8)'
  },
  card: {
    alignItems: 'center',
  }
})

export default withNavigation(WishListscreen)
