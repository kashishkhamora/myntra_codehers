import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { View, StyleSheet } from 'react-native'
import Screen from './Screen'
import WalletCard from './WalletCard'
import WalletDetails from './WalletDetails'
import { WALLET_TYPES } from '../walletData'
import { DATA } from '../walletData'

const WalletScreen = ({ navigation, wallets }) => {
  const isWalletDropdownVisible = navigation.getParam('isWalletDropdownVisible')
  const selectedWalletId =
    navigation.getParam('selectedWalletId') || wallets[0].id
  const wallet = wallets.find(w => w.id === selectedWalletId)
  console.log(wallet);

  const handleSelectWalletCard = id => {
    navigation.setParams({
      selectedWalletId: id,
      isWalletDropdownVisible: !isWalletDropdownVisible
    })
  }

  return (
    <Screen scrollEnabled={!isWalletDropdownVisible}>
      {isWalletDropdownVisible ? (
        <Screen style={styles.walletCardWrap}>
          {wallets.map(w => (
            <WalletCard
              key={w.id}
              id={w.id}
              label={w.label}
              value={w.value}
              type={w.type}
              isSelected={w.id === selectedWalletId}
              onPress={handleSelectWalletCard}
            />
          ))}
        </Screen>
      ) : <View style={styles.card}>
            {wallet.products.map(p=>(
              <WalletDetails product={p} />
            ))}
          </View>
      }
      
    </Screen>
  )
}

WalletScreen.defaultProps = {
  wallets: []
}

WalletScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  wallets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      type: PropTypes.oneOf(Object.values(WALLET_TYPES)).isRequired,
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
  walletCardWrap: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    backgroundColor: 'rgba(100, 100, 100, 0.8)'
  },
  card: {
    alignItems: 'center',
  }
})

export default withNavigation(WalletScreen)
