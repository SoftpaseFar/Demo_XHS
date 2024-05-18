import React from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';

export default () => {
  return (<View style={styles.root}>
    <Text style={styles.txt}
          numberOfLines={1}
          ellipsizeMode='tail'
          selectable={true}>abcd的撒旦撒旦撒旦撒旦撒旦撒多撒大sdsadsaef</Text>
  </View>);
}

const styles = StyleSheet.create({
  root: {
    width: '100%', height: '100%', backgroundColor: '#F0F0F0'
  }, txt: {
    fontSize: 36, fontWeight: 'bold', fontFamily: 'a'
  }
});
