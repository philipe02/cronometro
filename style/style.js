import React from "react";
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDD",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBotao: {
    width: 300,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  containerBotaoTempo: {
    width: 400,
    top: 50,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  containerTimer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    fontSize: 30,
    color: "#222",
  },
  botao: {
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  botaoTimer: {
    fontSize: 30,
    backgroundColor: "dodgerblue",
    color: "#DDD",
    padding: 3,
    borderRadius: 5,
    width: 110,
    textAlign: "center",
  },
});
