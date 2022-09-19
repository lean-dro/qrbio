import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "../assets/css/style";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Dev({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.devContainer}>
        <View style={styles.card}>
          <View style={styles.cabecalhoCard}>
            <Image
              style={{ width: 150, height: 200, borderRadius: 20 }}
              source={require("../assets/img/leandro.jpg")}
            />
            <Text style={styles.tituloDev}>Leandro</Text>
          </View>

          <View style={styles.textoCard}>
            <Text style={styles.textoDev}>
              Aluno do 3° MTEC de D.S. da ETEC de Guaianazes. Desenvolvedor Web
              voltado ao Back-End.
            </Text>
            <Text style={styles.textoDev}>
              Atualmente utilizo mais do PHP para desenvolver os sistemas em que
              trabalho.
            </Text>
          </View>
          <View style={styles.redesCard}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://github.com/lean-dro")}
            >
              <Ionicons name="logo-github" color={"#cc092f"} size={45} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/in/leandro-coelho-2942a9220/"
                )
              }
            >
              <Ionicons name="logo-linkedin" color={"#cc092f"} size={45} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
