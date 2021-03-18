import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [miliSeg, setMiliSeg] = useState(0);
  const [estado, setEstado] = useState(false);

  let operarCronometro = () => {
    if (estado) {
      setEstado(false);
    } else {
      setEstado(true);
    }
  };
  const zerarMiliseg = () => {
    setMiliSeg(0);
  };
  const zerarSegundos = () => {
    setSegundos(0);
  };

  const incrementar = () => {
    if (estado) setMiliSeg(miliSeg + 1);
  };
  const incrementarSeg = () => {
    setSegundos(segundos + 1);
  };
  const incrementarMin = () => {
    setMinutos(minutos + 1);
  };

  let limparTimer = () => {
    setMinutos(0);
    setSegundos(0);
    setMiliSeg(0);
  };

  let botaoTimer = () => {
    if (estado) return "Parar";
    else return "Iniciar";
  };

  let formatarHorario = (numero) => {
    var numFormatado = ("0" + numero).slice(-2);
    return numFormatado;
  };
  useEffect(() => {
    if (segundos >= 59) {
      zerarSegundos();
      incrementarMin();
    }
  }, [segundos]);
  useEffect(() => {
    if (miliSeg >= 9) {
      zerarMiliseg();
      incrementarSeg();
    }
  }, [miliSeg]);

  useEffect(() => {
    let timer = setInterval(() => {
      incrementar();
    }, 50);
    return () => clearInterval(timer);
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTimer}>
        <Text style={styles.timer}>
          {formatarHorario(minutos)}:{formatarHorario(segundos)}:{miliSeg}
        </Text>
      </View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botao} onPress={operarCronometro}>
          <Text style={styles.botaoTimer}>{botaoTimer()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={limparTimer}>
          <Text style={styles.botaoTimer}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
