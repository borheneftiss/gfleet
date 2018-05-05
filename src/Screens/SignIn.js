import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { navigateInit, setInStorage, isDisabledSignIn } from '../Utils';
import { signInEmailChanged, signInPasswordChanged, onSignIn, signInInitialState } from '../Actions';
import { Button, Input, Loading } from '../Components/common';
import { Width, Divers } from '../Constants';

class SignIn extends Component {
  componentWillUnmount() {
     this.props.signInInitialState();
  }
  onEmailChange(text) {
     this.props.signInEmailChanged(text);
  }
  onPasswordChange(text) {
     this.props.signInPasswordChanged(text);
  }
  onPressSignIn() {
    const { email, password } = this.props;
    this.props.onSignIn(email, password, (user) => {
      setInStorage(user, 'user').then(() => {
        navigateInit('AppLoading', (actionToDispatch) => this.props.navigation.dispatch(actionToDispatch));
      });
    });
  }
  render() {
    const { erreur, email, password, loading } = this.props;
    const disabled = isDisabledSignIn(email, password);
    const backgroundColor = disabled ? '#9E9E9E' : '#00C853';
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={[styles.styleText, { marginBottom: 10, marginTop: 20 }]}>OR LOGIN USING YOUR BON PLAT ACCOUNT</Text>
          <Input value={email} width={Width - 20} styleTextInput={{ fontSize: 14 }} styleContainer={styles.styleInput} placeholder={'Email'} placeholderTextColor={'#616161'} onChangeText={this.onEmailChange.bind(this)} />
          <Input value={password} width={Width - 20} secureTextEntry styleTextInput={{ fontSize: 14 }} styleContainer={styles.styleInput} placeholder={'Password'} placeholderTextColor={'#616161'} onChangeText={this.onPasswordChange.bind(this)} />
          <Text style={styles.styleTextErreur}>{erreur}</Text>
          <Button onPress={this.onPressSignIn.bind(this)} backgroundColorButton={backgroundColor} colorTitle={'#FFFFFF'} title={'Log in'} width={Width - 20} styleContainerButton={{ marginTop: 20, borderRadius: 3, borderColor: '#757575' }} />
        </View>
        <Loading isVisible={loading} />
      </View>
    );
  }
}
const styles = {
  mainContainer: {
    flex: 1,
    padding: 10
  },
  container: {
    paddingTop: 10
  },
  styleText: {
    fontSize: 14,
    color: '#616161'
  },
  styleInput: {
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderBottomWidth: 0.5,
    borderBottomColor: '#616161'
  },
  styleTextErreur: {
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10
  }
};
const mapStateToProps = ({ signIn }) => {
	return {
        email: signIn.email,
        password: signIn.password,
        loading: signIn.loading,
        erreur: signIn.erreur
	};
};
export default connect(mapStateToProps, { signInEmailChanged, signInPasswordChanged, onSignIn, signInInitialState })(SignIn);
