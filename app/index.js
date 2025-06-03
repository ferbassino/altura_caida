import { useRouter } from "expo-router";
import { Accelerometer } from "expo-sensors";
import * as Speech from "expo-speech";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  const router = useRouter();
  const [isRecording, setIsRecording] = useState(false);
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  Accelerometer.setUpdateInterval(10);

  const speak = async (text) => {
    await Speech.speak(text, {
      language: "es",
      rate: 1,
    });
  };

  const handleAltura = async () => {
    if (isRecording) return;
    setIsRecording(true);
    let arrayY = [];
    let arrayT = [];
    await speak("preparado");
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await speak("listo");
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await speak("ahora");
    Accelerometer.addListener((data) => {
      arrayY.push(data.y);
      arrayT.push(data.timestamp);
      setData(data);
    });
    setTimeout(async () => {
      Accelerometer.removeAllListeners();
      router.push({
        pathname: "/altura",
        params: {
          arrayY: JSON.stringify(arrayY),
          arrayT: JSON.stringify(arrayT),
        },
      });
      await speak("finalizado");
      setIsRecording(false);
    }, 5000);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Aceleración</Text>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        y: {y.toFixed(3)}
      </Text>
      <TouchableOpacity
        style={{
          borderRadius: 5,
          marginTop: 30,
          backgroundColor: "#012e33",
          padding: 10,
        }}
        onPress={() => handleAltura()}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
          Comenzar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
