import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  oldTaskContainer: {

  },
  noChoresWrapper: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  noChoresText: {
    fontFamily: Fonts.type.base,
    fontSize: 25,
    color: Colors.darkBlue
  },
  task: {
    height: 50,
    alignSelf: 'center',
    marginBottom: 30,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    borderColor: Colors.lightGray,
    borderRadius: 15,
    borderWidth: 0.35,
    width: Metrics.screenWidth - 30,
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  choreWrapper: {
    alignSelf: 'flex-start',
    margin: 10,
    justifyContent: 'center'
  },
  choreText: {
    fontFamily: Fonts.type.base,
    fontSize: 20,
    color: Colors.darkGray,
    alignSelf: 'flex-start',
    top: 18,
    flex: 1,
    left: 20,
  },
  timeText: {
    fontSize: 24,
    fontFamily: Fonts.type.base,
  },
  timeTextContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    right: 20
  },
  checkMark: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: 25
  },
  swipeOut: {
    alignSelf: 'flex-start'
  },
  scrollContainer: {
    paddingTop: 70,
    // paddingBottom: 40,
    bottom: 40
  },
  nameText: {
    fontFamily: Fonts.type.base,
    fontSize: 24,
  },
  userPicture: {
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 2
  }



})
