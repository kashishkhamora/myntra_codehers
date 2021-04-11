import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet } from 'react-native'
import { GROUP_TYPES } from '../wishListData'

const Badge = ({ type }) => (
  <Text style={[ styles.badge, type === GROUP_TYPES.PERSONAL ? styles.personal : styles.group ]}>
    {type}
  </Text>
)

Badge.propTypes = {
  type: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  badge: {
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 6
  },
  personal: {
    color: '#222',
    backgroundColor: '#F9B23B'
  },
  group: {
    color: '#fff',
    backgroundColor: '#87CEFA'
  }
})

export default Badge
