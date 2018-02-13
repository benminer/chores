import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  welcomeContainer: {
    // flex: 0.5,
    backgroundColor: Colors.white
  },
  welcomeTextContainer: {
    flex: 1,
    paddingTop: 8,
    left: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  welcomeText: {
    fontSize: 22,
    fontFamily: Fonts.type.base,
    alignSelf: 'flex-start',
    top: 20,
    right: 80
  },
  choreTextContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    right: 10
    // paddingBottom: 170
  },
  choreMessage: {
    flex: 1,
    fontSize: 16,
    alignSelf:'flex-start',
    fontFamily: Fonts.type.base,
    color: Colors.lightGray,
    // right: 52,,
    top: 58,
    left: 34,
    // bottom: 10
  },
  chartContainer: {
    flex: 1,
    top: 200
  },
  pie: {
    alignSelf: 'center',

  },
  chartText: {
    fontSize: 30,
    fontFamily: Fonts.type.base,
    color: Colors.darkGraycha
  }




})
