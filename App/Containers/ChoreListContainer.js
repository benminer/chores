import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Colors, Metrics } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
import ReactNativeHaptic from 'react-native-haptic'
import { ScrollView, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, StatusBar } from 'react-native'
import Header from '../Components/Header'
import ChoreList from '../Components/ChoreList'
import _ from 'lodash'
// Styles
import styles from './Styles/ChoreListStyles'
// Mock Data
import ChoresList from '../DummyData/FakeChores'
// For Time
var moment = require('moment')
// Icons
const downArrow = (<Icon name='angle-down' size={30} color={Colors.arrowGreen}/>)
// Boolean for list generation
// var userListSelected = true

class ChoreListScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='list' size={25} color={tintColor} />
    )
  }
  constructor (props) {
      super(props)
      var xOffset = 0
      this.state = {
          user: 'Ben',
          chores: this.props.chores,
          incompleteCount: 0,
          totalCount: 0,
          isUserListSelected: true,
          isScrollEnd: false
      }
  }

  componentWillMount () {
    const { user, chores } = this.state
    const date = new Date()
    console.tron.display({
      name: 'Chores',
      value: (Math.floor((date - chores[0].dateAssigned) / 86400000))
    })
    // TODO this will be done server side, but for now...
    var incompleteCount = 0
    var totalCount= 0
    for (i=0; i < chores.length; i++) {
      if (chores[i].assignedTo == user) {
        totalCount += 1
      }
      if (!chores[i].complete) {
        incompleteCount += 1
      }
    }
    this.setState({ totalCount: totalCount, incompleteCount: incompleteCount })
  }

  componentDidMount () {

  }

  componentDidUpdate () {

  }

  handleListButtonPressed = () =>  {
    this.setState({ isUserListSelected: !this.state.isUserListSelected })
    // ReactNativeHaptic.generate('selection')
  }

  render () {
    const { user, chores, incompleteCount, totalCount, isUserListSelected } = this.state
      return (
          <View style={styles.container}>
          <StatusBar barStyle='dark-content' />
          <Header title={'Chorely'} onPress={this.handleSettingsPressed} />
              <View style={styles.welcomeContainer}>
                <View style={styles.welcomeTextContainer}>
                  <Text style={styles.welcomeText}>
                    Welcome,
                      <Text style={styles.userText}>
                         {' ' + user}.
                      </Text>
                  </Text>
                </View>
                <View style={styles.choreTextContainer}>
                  <Text style={styles.choreMessage}>
                    You have {totalCount} chores assigned.
                  </Text>
                </View>
              </View>
              <View style={styles.listSelectContainer}>
                <View style={styles.meListSelectButton}>
                  <TouchableWithoutFeedback onPress={this.handleListButtonPressed}>
                    {this.renderMeText('Me')}
                  </TouchableWithoutFeedback>
                </View>
                <View style={styles.allListSelectButton}>
                  <TouchableWithoutFeedback onPress={this.handleListButtonPressed}>
                    {this.renderAllText('All')}
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <ScrollView horizontal
                          style={styles.listScrollView}
                          showsHorizontalScrollIndicator={false}
                          bounces={false}
                          contentOffset={{x: this.getContentOffset(), y: 0}}
                          onMomentumScrollEnd={(event) => {
                            if (event.nativeEvent.contentOffset.x == Metrics.screenWidth)
                            {
                              // () =>  {
                                isUserListSelected ? this.handleListButtonPressed() : null
                              // }
                            } else if (event.nativeEvent.contentOffset.x == 0)
                            {
                              // () =>  {
                                isUserListSelected ? null : this.handleListButtonPressed()
                              // }
                            }
                          }}
                          // onScroll={(event) => { this.xOffset = event.nativeEvent.contentOffset.x
                          // console.tron.display({
                          //   name: 'yOffset',
                          //   value: this.xOffset
                          // }) }}>
                          >
                <View style={styles.scrollViewContainer}>
                  <ChoreList isUserList={true}
                             isOldList={false}
                             chores={chores}
                             user={user}
                             onScrollBegin={this.handleListScrollBegin}
                             onScrollEnd={(bool) => {this.handleListScrollEnd(bool)} }
                  />
                </View>
                <View style={styles.scrollViewContainer}>
                  <ChoreList isUserList={false}
                             isOldList={false}
                             chores={chores}
                             user={user}
                             onScrollBegin={this.handleListScrollBegin}
                             onScrollEnd={(bool) => {this.handleListScrollEnd(bool)} }
                  />
                </View>
              </ScrollView>
              {/* </View> */}
          </View>
      )
  }

  renderChoreList (isUserList) {
    const { user, chores } = this.state
    if (isUserList) {
      return (
        <ChoreList isUserList={true}
                   chores={chores}
                   user={user}
        />
      )
    } else {
      return (
        <ChoreList isUserList={false}
                   chores={chores}
                   user={user}
        />
      )
    }
  }

  handleListScrollEnd = (bool) => {
    console.tron.display({
      name: 'scroll end?',
      value: bool
    })
    this.setState({ isScrollEnd: bool })
  }

  renderDownArrow = () => {
    const { isScrollEnd } = this.state
    if (isScrollEnd) {
      return (
        <View style={styles.arrowContainer}/>
      )
    } else {
      <View style={styles.arrowContainer}>
        {downArrow}
      </View>
    }
  }

  renderMeText = (text) => {
    const { isUserListSelected } = this.state
    if (isUserListSelected) {
      return (
        <View>
          <Text style={[styles.listButtonText, styles.currentListButton]}>
            {text}
          </Text>
          <View style={styles.arrowContainer}>
            {downArrow}
          </View>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={[styles.listButtonText, {color: Colors.lightGray }]}>
            {text}
          </Text>
          <View style={styles.arrowContainer}/>
        </View>
      )
    }
  }

  renderAllText = (text) => {
    const { isUserListSelected } = this.state
    if (!isUserListSelected) {
      return (
        <View>
          <Text style={[styles.listButtonText, styles.currentListButton]}>
            {text}
          </Text>
          <View style={styles.arrowContainer}>
            {downArrow}
          </View>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={[styles.listButtonText, {color: Colors.lightGray }]}>
            {text}
          </Text>
          <View style={styles.arrowContainer}/>
        </View>
      )
    }
  }

  // handleScroll = (event) => {
  //   console.tron.display({
  //     name: 'y offset',
  //     value: event.nativeEvent.contentOffset.y
  //   })
  // }

  getContentOffset = () => {
    const { isUserListSelected } = this.state

    if (isUserListSelected) {
      return 0
    } else {
      return Metrics.screenWidth
    }
  }
}

const mapStateToProps = (state) => {
  return {
    chores: ChoresList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoreListScreen)
