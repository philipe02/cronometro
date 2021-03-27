import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {styles} from './style/style'
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
  const completarMiliseg = () => {
    setMiliSeg(9);
  };
  const completarSegundos = () => {
    setSegundos(10);
  };
  const setTimerMin = (tempo) => {
    setMinutos(tempo);
    setSegundos(0);
    setMiliSeg(0);
  }
  const decrementar = () => {
    if (estado) 
      setMiliSeg(miliSeg-1);
  };
  const decrementarSeg = () => {
    setSegundos(segundos - 1);
  };
  const decrementarMin = () => {
    setMinutos(minutos - 1);
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
    if (segundos <= 0 && estado) {
      completarSegundos();
      decrementarMin();
    }
  }, [segundos]);
  useEffect(() => {
    if (miliSeg <= 0 && estado)  {
      completarMiliseg();
      decrementarSeg();
    }
  }, [miliSeg]);
  useEffect(() => {
    if (minutos < 0) {
      setEstado(false)
      setMinutos(0);
      setSegundos(0);
      setMiliSeg(0);
    }
  }, [minutos])

  useEffect(() => {
    let timer = setInterval(() => {
      decrementar();
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
      <View style={styles.containerBotaoTempo}>
        <TouchableOpacity style={styles.botao} onPress={() => setTimerMin(1)}>
          <Text style={styles.botaoTimer}>1 min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => setTimerMin(5)}>
          <Text style={styles.botaoTimer}>5 min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => setTimerMin(10)}>
          <Text style={styles.botaoTimer}>10 min</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

