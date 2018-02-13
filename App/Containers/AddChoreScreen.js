import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import ChoreList from '../Components/ChoreList'
import { Colors, Metrics } from '../Themes'
import { NavigationActions } from 'react-navigation'
// Mock Data
import ChoresList from '../DummyData/FakeChores'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddChoreScreenStyle'

class AddChoreScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'plus'} size={40} color={'white'}/>
    )
  }

   constructor (props) {
      super(props)
      this.state = {
        chores: this.props.chores,
        autoFocus: false
      }
   }

   componentWillReceiveProps (nextProps) {
     if (this.props.navigation.state.key === 'AddChore') {
       this.setState({ autoFocus: true })
     }
   }

   componentWillMount () {
     console.tron.display({
       name: 'screenkey',
       value: this.props.navigation
     })

   }


  render () {
    const { chores } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.addChoreView}>
          <Text style={styles.addChoreText}>
            Add a new task.
          </Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.lightGray}
          autoCorrect
          autoFocus={this.state.autoFocus}
          keyboardType='default'
          returnKeyLabel='Add'
        />
        <View style={styles.pastTaskView}>
          <View style={styles.pastTaskTextView}>
            <Text style={styles.pastText}>
              Reassign a past task.
            </Text>
          </View>
          <View style={styles.choreListContainer}>
            <ChoreList
              isOldList={true}
              isUserList={false}
              chores={chores}
            />
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddChoreScreen)
