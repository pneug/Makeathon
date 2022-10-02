import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Prediction({ prediction }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
          {prediction == 0 ? 'Disease Detected' : 'Healthy'}
        </Text>
    </View>
  );
}

const margin = 24;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: "absolute",
    top: margin,
    left: margin,
    right: margin,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    paddingVertical: 2,
    fontSize: 20,
  },
});
