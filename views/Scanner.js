import React, { useState, useEffect } from "react";
import { Linking } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import styles from "../assets/css/style";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Linking.openURL(`${data}`);
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          width: "100%",
          height: "100%",
        }}
      />

      <View style={styles.scanner}>
        <Ionicons
          name="scan-outline"
          color={"white"}
          size={250}
          style={{ textAlign: "center" }}
        />
      </View>
    </View>
  );
}
