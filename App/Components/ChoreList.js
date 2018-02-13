import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Colors } from '../Themes'
import Swipeout from 'react-native-swipeout'
import styles from './Styles/ChoreListStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import _ from 'lodash'
// For Time
var moment = require('moment')
// check
const check = (<Icon name='check' size={30} style={styles.checkMark} color={'#FFFFFF'}/>)

export default class ChoreList extends Component {
  static propTypes = {
    isUserList: PropTypes.bool,
    chores: PropTypes.array,
    user: PropTypes.string,
    onPress: PropTypes.func,
    onRefresh: PropTypes.func,
    onScrollBegin: PropTypes.func,
    onScrollEnd: PropTypes.func,
    isOldList: PropTypes.bool
  }
  static defaultProps = {
    isUserList: true,
    chores: [],
  }

  constructor (props) {
    super(props)
    this.state = {
      userChores: [],
      orderedChores: [],
      oldChores: [],
      colorSwap: false
    }
  }

  componentWillReceiveProps () {
    console.tron.display({
      name: 'props',
      value: this.props.isUserList
    })
    const { chores, user } = this.props
    var userChores = []
    var oldChores = []
    if (this.props.isUserList) {
      for (i = 0; i < chores.length; i++) {
        if (chores[i].assignedTo == user) {
          userChores.push(chores[i])
        }
      }
    } else if (this.props.isOldList) {
      for (i = 0; i < chores.length; i++) {
        if (chores[i].complete) {
          oldChores.push(chores[i])
        }
      }
    }
    this.setState({ userChores: userChores, oldChores: oldChores })
  }

  componentWillMount () {
    const { chores, user, isUserList } = this.props
    var userChores = []
    var oldChores = []
    if (isUserList) {
      for (i = 0; i < chores.length; i++) {
        if (chores[i].assignedTo === user) {
          userChores.push(chores[i])
        }
      }
      this.setState({ userChores: userChores })
    } else if (this.props.isOldList) {
      for (i = 0; i < chores.length; i++) {
        if (chores[i].complete) {
          oldChores.push(chores[i])
        }
      }
    } else {
      this.setState({ orderedChores: this.orderChoresByDate(chores), oldChores: oldChores })
    }
  }

  orderChoresByDate = (chores) => {
    return _.orderBy(chores, ['dateAssigned'], ['desc'])
  }

  determineDateColor = (item) => {
    // TODO make this a prop
    const date = new Date()
    const diff = (Math.floor((date - item.dateAssigned) / 86400000))
    // Chore is two days old or greater
    if (diff >= 2) {
      return Colors.oldRed
    } else if (diff == 1) {
      return Colors.orange
    } else {
      return Colors.darkBlue
    }
  }

  determineUserColor = (item) => {
    if (item.assignedTo === 'Ben') {
      return Colors.darkBlue
    } else if ((item.id % 2) == 0) {
        return Colors.orange
    } else {
      return Colors.green
    }
  }

  renderUserTask (task, color) {
    const { chore, dateAssigned } = task
    const date = new Date()
    const diff = (Math.floor((date - dateAssigned) / 86400000))
    return (
      <View style={styles.task}>
            <TouchableOpacity style={styles.row}>
                <Text style={styles.choreText}>
                  {chore}
                </Text>
                <View style={styles.timeTextContainer}>
                  <Text style={[styles.timeText, {color: color}]}>
                    {diff} Days
                  </Text>
                </View>
            </TouchableOpacity>
    </View>
    )
  }

  renderTask (task) {
    const { chore, assignedTo } = task
    return (
      <View style={styles.task}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.choreText}>
            {chore}
          </Text>
           <View style={styles.nameContainer}>
            <Text style={[styles.nameText, {color: this.determineUserColor(task)}]}>
              {assignedTo}
            </Text>
           </View>
           <Image source={task.userPicture} style={[styles.userPicture, { borderColor:this.determineUserColor(task)}]}/>
        </TouchableOpacity>
      </View>
    )
  }

  renderPastTask (task) {
    const { chore  } = task
    return (
      <View style={styles.task}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.choreText}>
            {chore}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderChoreList = () => {
    // List is empty
    if (this.props.chores.length === 0) {
      return (
        <View style={styles.noChoresWrapper}>
          <Text style={styles.noChoresText}>
            No chores found here...impressive.
          </Text>
        </View>
      ) // is a user list
    } else {
      return (
        <ScrollView bounce={false}
          style={[this.props.isOldList ? styles.oldTaskContainer :styles.scrollContainer, {height: (this.props.chores.length * 50) - 10}]}
          overScrollMode={'never'}
          pagingEnabled={false}
          refreshControl={this.props.onRefresh}
          automaticallyAdjustContentInsets={true}
          contentInset={{top: this.props.isOldList ? 20 : 0, left: 0, bottom: this.props.isOldList ? 30 : 70, right: 0}}
          snapToInterval={50}
          showsVerticalScrollIndicator={false}
          onMomentumScrollBegin={this.props.scrollBegin}
          // onMomentumScrollEnd={(event) => {
          //   // console.tron.display(
          //   //   {
          //   //     name: 'yoffset',
          //   //     value: event.nativeEvent.contentOffset.y
          //   //   }
          //   // )
          //   // const yVal = (this.props.chores.length * 50) - 10) - 70
          //   // if (event.nativeEvent.contentOffset.y == yVal) {
          //   //   this.props.onScrollEnd(true)
          //   // } else if (!event.nativeEvent.contentOffset.y) {
          //   //   this.props.onScrollEnd(false)
          //   // }
          // }}
          >
          <FlatList
            data={this.props.isUserList ? this.state.userChores : this.props.chores}
            renderItem={({ item }) => {
              const color = this.determineDateColor(item)
              if (this.props.isUserList) {
                return this.renderUserTask(item, color)
              } else if (this.props.isOldList) {
                return this.renderPastTask(item)
              } else {
                return this.renderTask(item)
              }
            }}
            keyExtractor={item => item.id}
            />
        </ScrollView>
      ) // is everyones list
    }
  }

  render () {
    console.tron.display({
      name: 'ordered',
      value: this.state.orderedChores
    })
    return (
      <View>
        {this.renderChoreList()}
      </View>
    )
  }
}
