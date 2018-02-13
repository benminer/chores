import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, StatusBar, View } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../Components/Header'
import { Colors, Metrics } from '../Themes'
import * as Progress from 'react-native-progress'
// Styles
import styles from './Styles/ChartScreenStyles'
// Mock Data
import ChoresList from '../DummyData/FakeChores'

class ChartScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='pie-chart' size={25} color={tintColor} />
    )
  }

  constructor (props) {
    super(props)
    this.state = {
      user: 'Ben',
      chores: this.props.chores,
      completeCount: 0,
      totalCount: 0,
    }
  }

  componentWillMount () {
    const { user, chores } = this.state
    // TODO this will be done server side, but for now...
    var completeCount = 0
    var totalCount= 0
    for (i=0; i < chores.length; i++) {
      if (chores[i].assignedTo == user) {
        totalCount += 1
        if (chores[i].complete) {
          completeCount += 1
        }
      }
    }
    this.setState({ totalCount: totalCount, completeCount: completeCount })

  }

  render () {
    const { user, chores, completeCount, totalCount } = this.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <Header title={'Statistics'} />
        <View style={styles.welcomeContainer}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>
              Household Breakdown
            </Text>
          </View>
          <View style={styles.choreTextContainer}>
            <Text style={styles.choreMessage}>
              Out of {totalCount} chores assigned, you have {completeCount}       completed.
            </Text>
          </View>
        </View>
        <View style={styles.chartContainer}>
          <Progress.Circle style={styles.pie}
            progress={completeCount/totalCount}
            unfilledColor={Colors.orange}
            size={180}
            indeterminate={false}
            color={Colors.darkBlue}
            borderWidth={0}
            thickness={10}
            showsText
            formatText={() => (<Text style={styles.chartText}> {(completeCount/totalCount * 100) + '%'} </Text>)} 
            />
        </View>
      </View>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(ChartScreen)
