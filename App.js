import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Linking } from "react-native";
import styles from "./assets/css/style";
import { useFonts } from "expo-font";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

function Dev({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate("Scanner")}
        title="Go to notifications"
      />
    </View>
  );
}

function Scanner({ navigation }) {
 

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate("Dev")}
        title="Go to notifications"
      />
      <Text style={{ fontFamily: "Merienda Bold", fontSize: 30 }}>
        Leitor de QR-Code
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dev">
        <Drawer.Screen name="Scanner" component={Scanner} />
        <Drawer.Screen name="Dev" component={Dev} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// expo install expo-barcode-scanner
// npx expo install expo-font
// expo install expo-permissions

// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/drawer
// npx expo install react-native-gesture-handler react-native-reanimated
