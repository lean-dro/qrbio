import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  qr: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgQr: {
    width: 300,
    height: 300,
  },
  textoQr: {
    fontFamily: "RobotoMono_700Bold",
    textAlign: "center",
    fontSize: 18,
  },
  scanner: {
    position: "absolute",
    paddingTop: 200,
    textAlign: "center",
  },
  botao: {
    marginTop: 30,
  },
  devContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: 30,
    borderRadius: 50,
    justifyContent: "space-around",
    
    flex: 0.6,
    flexDirection: "column",
    backgroundColor: "#cc092f",
    borderWidth: 3
  },
  tituloDev: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  textoDev: {
    fontSize: 15,
    color: "white",
    textAlign: "justify",
  },
  cabecalhoCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textoCard: {
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  redesCard: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 2
  }
});
