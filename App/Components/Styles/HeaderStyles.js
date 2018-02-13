import { Metrics, Colors, Fonts } from '../../Themes'

export default {
  headerView: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight / 9,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.darkBlue,
    borderBottomWidth: 0.2,
    paddingTop: 10,
    // shadowRadius: 10,
    // shadowOffset: { height: -1 },
    // shadowColor: 'rgba(73, 154, 229, 50)',
    // shadowOpacity: 230,
    // marginTop: 5
  },
  shadow: {
    width: Metrics.screenWidth,
    height: 0.2,
    left: 25,
    top: 45,
    shadowRadius: 10,
    shadowOffset: { height: 1 },
    shadowColor: 'rgba(73, 154, 229, 50)',
    shadowOpacity: 230,
  },
  headerText: {
    fontSize: 24,
    fontFamily: Fonts.type.base,
    color: Colors.black,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
    left: 85,
    top: 8
  },
  settingsButtonView: {
    // flex: 0.5,
    flex: 0.3,
    marginBottom: 20,
    marginLeft: 50,
    left: 70,
    top: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
  settingsButton: {
    alignSelf: 'center',
    alignItems: 'center'
  }
}
