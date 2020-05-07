import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/**
 * iOS com Emulador: localhist
 * iOS com físico: IP da máquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador Android: 10.0.2.2 (Android Studio)
 * Android com Emulador Genymotion: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 */
