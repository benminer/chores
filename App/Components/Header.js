import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './Styles/HeaderStyles'
import Icon from 'react-native-vector-icons/Octicons'
import { Colors } from '../Themes'

const settings = (<Icon name='gear' size={25} color={Colors.black} />)

export default class Header extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string
  }

  render () {
      return (
        <View style={styles.headerView}>
          <Text style={styles.headerText}>
            {this.props.title}
          </Text>
          <View style={styles.settingsButtonView}>
            <TouchableOpacity style={styles.settingsButton} onPress={this.props.onPress}>
              {settings}
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}
