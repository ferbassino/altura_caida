import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
// import { accT } from "../auxiliaries/accT";
// import { accY } from "../auxiliaries/accY";

export default function Altura() {
  const router = useRouter();
  const { arrayY, arrayT } = useLocalSearchParams();
  const parsedArrayY = arrayY ? JSON.parse(arrayY) : [];
  const parsedArrayT = arrayT ? JSON.parse(arrayT) : [];
  const [altura, setAltura] = useState(0);

  // const accY2 = accY.slice(130, 230);
  const a0 = parsedArrayY.findIndex((a) => a < 0.5);

  const af1 = parsedArrayY.findIndex((a) => a > 1.5);
  const af = af1 - 3;

  const dt = parsedArrayT[af] - parsedArrayT[a0];

  const h = (1 / 2) * 9.81 * dt * dt;

  useEffect(() => {
    setAltura(h.toFixed(3));
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#caf7fc",
      }}
    >
      <Text style={{ marginVertical: 20, fontSize: 24, fontWeight: "bold" }}>
        Registro de aceleración
      </Text>
      <Text style={{ marginVertical: 20, fontSize: 24, fontWeight: "bold" }}>
        {isNaN(altura) ? (
          <Text
            style={{
              color: "red",
              marginVertical: 20,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Error de medición
          </Text>
        ) : (
          <Text>La altura es: {altura} m</Text>
        )}
      </Text>
      <View>
        <LineChart
          data={{
            labels: parsedArrayT,
            datasets: [
              {
                data: parsedArrayY,
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          // yAxisLabel="$"
          // yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#2003fc",
            backgroundGradientFrom: "#2003fc",
            backgroundGradientTo: "#2003fc",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "1",
              strokeWidth: "2",
              stroke: "#cccccc",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 5,
          marginTop: 30,
          backgroundColor: "#012e33",
          padding: 10,
        }}
        onPress={() => router.push("/")}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
          Ir al home
        </Text>
      </TouchableOpacity>
    </View>
  );
}
