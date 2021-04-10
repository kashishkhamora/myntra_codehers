import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Image } from 'react-native'
import { WALLET_TYPES } from '../walletData'
import {Comment} from './Comment';
import Badge from './Badge'

const WalletRow = ({ children }) => (
  <View
    style={[
      styles.walletRow,
      { justifyContent: Array.isArray(children) ? 'space-between' : 'center' }
    ]}
  >
    {children}
  </View>
)

const WalletDetails = ({ product }) => {
  
  return (
  <View style={styles.wrapper}>
    <Image style={{width: 50, height: 50}}
    resizeMode={'cover'}
    source={product.image} 
    /> 
  </View>)
  
  }

WalletDetails.defaultProps = {
  product: {}
}

WalletDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    marginVertical: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }
  },
  walletRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopColor: '#ddd',
    borderTopWidth: StyleSheet.hairlineWidth
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400'
  },
  value: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '200',
    color: '#666',
    marginTop: 10,
    marginBottom: 28
  },
  label: {
    fontWeight: '600'
  },
  message: {
    textAlign: 'center',
    paddingHorizontal: 10
  }
})

export default WalletDetails
