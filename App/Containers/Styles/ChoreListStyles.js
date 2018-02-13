import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
      flex: 1,
      backgroundColor: Colors.white
    },
    welcomeContainer: {
      // flex: 0.5,
      backgroundColor: Colors.white
    },
    listContainer: {
      flex: 1
    },
    welcomeTextContainer: {
      flex: 1,
      paddingTop: 8,
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
    userText: {
      fontSize: 22,
      fontFamily: Fonts.type.base,
      color: Colors.faintBlue
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
    choreTextContainer: {
      flex: 2.5,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      // paddingBottom: 170
    },
    listSelectContainer: {
      flex: 1.75,
      left: 5,
      // top: 20,
      // marginTop: 50,
      // paddingBottom: 30,
      // paddingBottom: 50,
      bottom: 30,
      marginTop: -150,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    meListSelectButton: {
      marginRight: 160,
      // right: 50

    },
    allListSelectButton: {

    },
    listButtonText: {
      fontSize: 20,
      fontFamily: Fonts.type.base,
    },
    currentListButton: {
      color: '#000000',
      fontSize: 22
    },
    listButton: {
      color: 'rgba(87, 86, 86, 50)'
    },
    arrowContainer: {
      width: 20,
      height: 20,
      left: 6,
    },
    listScrollView: {
      width: Metrics.screenWidth,
      marginTop: -350,
      // marginBottom: 100,
      flex: 1
    },
    scrollViewContainer: {
      // flex: 1,
      margin: 15
    }
})
