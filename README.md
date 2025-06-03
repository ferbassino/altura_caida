# Medidor de Altura - App con Expo y Sensores

Esta aplicación móvil desarrollada con **React Native + Expo** permite registrar datos del acelerómetro para calcular una **altura estimada** en base al movimiento del dispositivo. La app guía al usuario mediante comandos de voz y muestra una gráfica del registro de aceleración.

## 🧠 Descripción

La app cuenta con dos pantallas principales:

- **Home**: muestra en tiempo real el eje `y` del acelerómetro y permite iniciar la medición.
- **Altura**: recibe los datos recolectados durante 5 segundos y calcula una altura estimada utilizando la fórmula de caída libre.

La medición se guía con comandos hablados utilizando `expo-speech` y se visualiza gráficamente con `react-native-chart-kit`.

## 🚀 Funcionalidades

- Acceso al **sensor de acelerómetro**.
- **Reconocimiento de movimiento** y registro durante 5 segundos.
- Cálculo estimado de altura usando la fórmula física:  
  \[ h = \frac{1}{2} \cdot g \cdot t^2 \]
- Guía por **voz en español** con tiempos de espera.
- Visualización de resultados con **gráfico interactivo**.
- Navegación simple entre pantallas con `expo-router`.

## 🛠️ Tecnologías

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [expo-sensors](https://docs.expo.dev/versions/latest/sdk/sensors/)
- [expo-speech](https://docs.expo.dev/versions/latest/sdk/speech/)
- [react-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit)
- [expo-router](https://expo.github.io/router/)

## 📲 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/altura-app.git
   cd altura-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el proyecto con Expo:
   ```bash
   npx expo start
   ```

## 📋 Estructura de navegación

```jsx
<Stack>
  <Stack.Screen name="index" options={{ title: "Home" }} />
  <Stack.Screen name="altura" options={{ title: "Altura" }} />
</Stack>
```

## 📷 Capturas de pantalla (opcional)

Agrega aquí capturas si deseas mostrar cómo luce la app.

---

## 📐 Cálculo de altura

Se utiliza la fórmula física de caída libre:
```js
const h = (1 / 2) * 9.81 * dt * dt;
```
Donde `dt` es el tiempo transcurrido entre dos eventos detectados en el eje `y`.

---

## ⚠️ Notas

- Esta app es experimental y depende de la sensibilidad del acelerómetro del dispositivo.
- Los valores de altura pueden variar significativamente si el dispositivo no se mantiene estable.

## 🧑‍💻 Autor

Ferba - Proyecto de ejemplo con sensores en Expo
