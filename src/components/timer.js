import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TimerView = () => {
  // 使用useState钩子初始化时间状态
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 每秒更新时间状态
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    // 组件卸载时清除计时器
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.pad}>
      <Text style={styles.txt}>{seconds} 秒</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pad: {
    width: '100%',
    padding: 10,
  },
  txt: {
    color: 'orange',
    fontSize: 24,
    textAlign: 'center' ,
  },
});

export default TimerView;
