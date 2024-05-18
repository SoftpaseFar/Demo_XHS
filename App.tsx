import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import AnimTest from './src/anim/AnimTest.js';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#FFFFFF'
      />
      <View style={styles.container}>
        <AnimTest />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center'
  }
});

export default App;
