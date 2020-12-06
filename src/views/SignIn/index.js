import React, { useContext } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { signIn } from '../../services/auth';
import AuthContext from '../../contexts/auth';

import styles from './styles';

const SignIn = () => {
  const { signed, user, signIn } = useContext(AuthContext);

  console.log(signed);
  console.log(user);

  function handleSignIn() {
    signIn();
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleSignIn} style={styles.buttonSignIn}>
        <Text style={styles.buttonSignInText}>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
