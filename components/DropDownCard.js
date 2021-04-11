import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Badge from './Badge'
import { GROUP_TYPES } from '../walletData'

const DropDownCard = ({ id, label, value, type, isSelected, onPress }) => (
  <TouchableOpacity
    activeOpacity={isSelected ? 1 : 0.7}
    onPress={() => onPress(id)}
    style={[
      styles.cardTouchable,
      { borderColor: isSelected ? '#69A6F7' : '#fff' }
    ]}
  >
    <View style={[styles.cardWrap, { opacity: isSelected ? 1 : 0.8 }]}>
      
      <View style={styles.cardBottom}>
        <Text style={styles.header}>{label}</Text>
        <Badge type={type} />
      </View>
    </View>
  </TouchableOpacity>
)

DropDownCard.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.oneOf(Object.values(GROUP_TYPES)).isRequired,
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
  cardTouchable: {
    borderRadius: 6,
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 18,
    borderWidth: 4,
    borderStyle: 'solid',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }
  },
  cardWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 40
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  value: {
    fontSize: 28,
    fontWeight: '200',
    color: '#666'
  }
})

export default DropDownCard
