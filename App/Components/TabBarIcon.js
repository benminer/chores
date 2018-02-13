import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
var Spinner = require('react-native-spinkit');

export default class TabBarIcon extends React.PureComponent {

  renderCenterIcon = (focused) => {
    if (focused) {
      return (<Spinner style={{ marginBottom: 5 }} isVisible={focused} size={35} type='ThreeBounce' color={'white'}/>)
    } else {
      return (<Icon name='plus' size={40} color={'white'} style={{ marginTop: 5 }}/>)
    }
  }

  render() {
    const {
      position,
      scene,
      navigation,
      activeTintColor,
      inactiveTintColor,
      style,
      focused
    } = this.props;
    const { route, index } = scene;
    const { routes } = navigation.state;
    // Prepend '-1', so there are always at least 2 items in inputRange
    const inputRange = [-1, ...routes.map((x, i) => i)];
    const activeOpacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 1 : 0)),
    });
    const inactiveOpacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 0 : 1)),
    });
    // We render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them.
    const viewStyle = scene.index === 1 ? styles.centerIconContainer: {};
    const defaultIconStyles = scene.index === 0 ? styles.leftIcon : styles.rightIcon;
    
    if (index == 1) {
      return (
        <LinearGradient colors={['#31C1E0', '#3EAAE3', '#499BE5']} style={[viewStyle, style]} start={{x: 0.3, y: 1.0}} end={{x: 0.5, y: 0.2}}>
            <View style={[viewStyle, style]}>
                <View style={styles.centerIcon}>
                {this.renderCenterIcon(focused)}
                </View>
            </View>
        </LinearGradient>
      )
    } else {
      return (
        <View style={[viewStyle, style]}>
          <Animated.View style={[defaultIconStyles, {opacity: activeOpacity}]}>
            {this.props.renderIcon({
              route,
              index,
              focused: true,
              tintColor: activeTintColor,
            })}
          </Animated.View>
          <Animated.View style={[defaultIconStyles, {opacity: inactiveOpacity}]}>
            {this.props.renderIcon({
              route,
              index,
              focused: false,
              tintColor: inactiveTintColor,
            })}
          </Animated.View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  leftIcon: {
    // We render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them:
    // Cover the whole iconContainer:
    position: 'absolute',
    top: 0,
    left: 0,
    right: 25,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 25,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerIconContainer: {
    backgroundColor: 'transparent',
    width: 70,
    height: 70,
    borderRadius: 35,
    shadowRadius: 5,
    shadowOffset: { height: 5 },
    shadowColor: 'rgba(73, 154, 229, 50)',
    shadowOpacity: 20,
    transform: [{ translateY: -10 }],
  },
  centerIcon: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
