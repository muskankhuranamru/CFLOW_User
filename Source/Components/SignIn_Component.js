import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import CheckBox from '@react-native-community/checkbox';
import Button from '../Components/Button';

const SignIn_Component = ({placeholder}) => {
  return (
    <>
      <View style={[Styles.SignIn_body]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#2D2D2D"
          style={[Styles.SignIn_Input]}
        />
        <View style={[Styles.Checkbox_View]}>
          <CheckBox
            style={[Styles.Checkbox]}
            disabled={false}
            tintColor={{true: 'blue', false: 'yellow'}}
          />
          <Text style={[Styles.Yellow_Text]}>
            I agree to all terms and conditions
          </Text>
        </View>
        <Button style={[Styles.Yellow_Button]} title="Send OTP" />
        <View style={[Styles.Otp_View]}>
          <TextInput style={[Styles.Otp_input]} />
          <TextInput style={[Styles.Otp_input]} />
          <TextInput style={[Styles.Otp_input]} />
          <TextInput style={[Styles.Otp_input]} />
          <TextInput style={[Styles.Otp_input]} />
          <TextInput style={[Styles.Otp_input]} />
        </View>
        <TouchableOpacity>
          <Text style={[Styles.Grey_text]}>Resend OTP</Text>
        </TouchableOpacity>
        <Button style={[Styles.Yellow_Button]} title="Sign In" />
        <View style={[Styles.Line]}>
          <Text style={[Styles.Grey_text]}>or</Text>
        </View>
      </View>
    </>
  );
};

export default SignIn_Component;
