import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Focus from './src/features/focus/Focus';
import Timer from './src/features/timer/Timer'
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Gardennig")
  return (
    <View style={styles.container}>
      {focusSubject ?
        (<Timer focusSubject={focusSubject}/>)
        :
        <Focus addSubject={focusSubject}/>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS ==='ios' ? spacing.md : spacing.lg,
    backgroundColor:colors.darkBlue
  },
});
