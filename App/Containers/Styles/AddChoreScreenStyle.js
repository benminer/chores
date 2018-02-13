import { StyleSheet } from 'react-native'
import { ApplicationStyles, Themes, Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    top: 10
    // right: 5
  },
  addChoreView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  pastTaskView: {
    // flex: 1,
    // flexDirection: 'row',
    // // marginTop: 10,
    // // alignSelf: 'center',
    // // alignItems: 'center',
    // // justifyContent: 'center'
    // marginBottom: 20,
    // paddingBottom: 40
  },
  choreListContainer: {
    // marginTop: 20,
    // // alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center'
    // flex: 0.5
  },
  addChoreText: {
    fontSize: 24,
    fontFamily: Fonts.type.base,
    color: Colors.darkGray,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    right: 80,
    top: 20
  },
  pastText: {
    fontSize: 24,
    fontFamily: Fonts.type.base,
    color: Colors.darkGray,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    left: 20,
    marginBottom: 5
    // right: 80,
    // top: 20
  },
  textInput: {
    fontSize: 24,
    fontFamily: Fonts.type.base,
    color: Colors.darkGray,
    borderColor: Colors.lightGray,
    borderRadius: 15,
    borderWidth: 0.35,
    width: Metrics.screenWidth - 30,
    height: 50,
    bottom: 40,
    alignSelf: 'center',
    // flex: 1
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})
