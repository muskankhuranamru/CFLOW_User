import {StyleSheet} from 'react-native';
import Colors from '../../Utils/Colors';

export default StyleSheet.create({
  SignIn_Tab_container: {
    backgroundColor: '#08090C',
  },

  SignIn_title: {
    height: 100,
    width: '100%',
    backgroundColor: '#08090C',
    alignItems: 'center',
    flexDirection: 'column',
  },
  SignIn_titleText: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 24,
    color: Colors.white,
    lineHeight: 32.68,
    marginTop: 50,
  },
  SignIn_body: {
    height: '100%',
    width: '100%',
  },
  SignIn_Input: {
    marginTop: 25,
    borderBottomColor: Colors.white,
    borderBottomWidth: 0.5,
    marginHorizontal: 18,
  },
  Checkbox_View: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
    padding: 5,
  },

  Yellow_Text: {
    color: '#ffb600',
    fontFamily: 'Open Sans',
    fontSize: 14,
    lineHeight: 20,
  },

  Checkbox: {
    borderColor: 'yellow',
    borderWidth: 1,
  },
  Yellow_Button: {
    alignSelf: 'center',
    height: 43,
    width: 105,
    marginTop: 15,
  },
  Otp_View: {
    flexDirection: 'row',

    width: 411,
    width: '100%',
    justifyContent: 'space-evenly',
    padding: 35,
  },
  Otp_input: {
    height: 35,
    width: 35,
    borderWidth: 0.5,
    borderColor: Colors.white,
  },
  Grey_text: {
    fontFamily: 'Open Sans',
    color: '#2d2d2d',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 28,
  },
  Line: {
    borderTopWidth: 0.6,
    borderTopColor: Colors.grey,
    marginTop: 40,
    alignItems: 'center',
  },
});
