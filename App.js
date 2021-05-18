import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CodePush from 'react-native-code-push';

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};

const App = () => {
  useEffect(() => {
    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE,
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Hello Welcome to CodePush Example</Text>
      <Text style={styles.topText}>One new Day !!!</Text>
      <Text style={styles.topText}>This example is version specific !!!</Text>
    </View>
  );
};

export default CodePush(codePushOptions)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
