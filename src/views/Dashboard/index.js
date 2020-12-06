import React, { useContext } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AuthContext from '../../contexts/auth';

import styles from './styles';

const Dashboard = () => {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={(e) => handleSignOut(e)}
        style={styles.buttonSignIn}
      >
        <Text style={styles.buttonSignInText}>Deslogar-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
