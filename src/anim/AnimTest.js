import React, { useRef, useState } from 'react';

import {
  StyleSheet,
  View,
  Button,
  LayoutAnimation
} from 'react-native';

export default () => {
  const [showView, setShowView] = useState(false);
  return (
    <View>
      <Button title='按钮' onPress={() => {
        LayoutAnimation.configureNext(
          LayoutAnimation.Presets.linear,
          // LayoutAnimation.Presets.easeInEaseOut,
          // LayoutAnimation.Presets.spring,
          () => {
            console.log('动画结束');
          },
          () => {
            console.log('动画异常');
          }
        );
        // LayoutAnimation.spring(),
        setShowView(true);
      }} />
      {showView && <view style={styles.view} />}

    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  }, view: {}
});
