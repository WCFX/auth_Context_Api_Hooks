import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, View } from 'react-native';
import api from '../services/api';
import * as auth from '../services/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNauth:user');
      const storagedToken = await AsyncStorage.getItem('@RNauth:token');

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }
    }
    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    await AsyncStorage.setItem('@RNauth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNauth:token', JSON.stringify(response.token));
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
