import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./assets/css/style";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Scanner from "./views/Scanner";
import QR from "./views/Qr";
import Dev from "./views/Dev";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="scan-circle-outline" color={color} size={size} />
            ),
          }}
          name="Scanner"
          component={Scanner}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="qr-code" color={color} size={size} />
            ),
          }}
          name="QR"
          component={QR}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="rabbit" color={color} size={size} />
            ),
          }}
          name="Dev"
          component={Dev}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// expo install expo-barcode-scanner
// npx expo install expo-font
// expo install expo-permissions
// expo install @expo-google-fonts/inter expo-font
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/bottom-tabs
