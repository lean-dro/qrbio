import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import styles from "../assets/css/style";
export default function Qr({navigation}){
    return (
      <View style={styles.container}>
        <View style={styles.qr}>
          <Text style={styles.textoQr}>Acesse para mais informações sobre a Sífilis:</Text>
          <Image
            style={styles.imgQr}
            resizeMode="contain"
            source={require("../assets/img/qr-code.png")}
          />
        </View>
      </View>
    );
}