import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        
      </View>
      <ScrollView>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado1}></View>
        <View style={styles.quadrado2}></View>
        <View style={styles.quadrado1}></View>
      </ScrollView>
      <View style={styles.header}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1
  },
});
