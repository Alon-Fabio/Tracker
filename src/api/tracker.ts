import axios from "axios";
// If this import fails, try the one beneath it or try to reinstall it with expo.
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncStorage } from "react-native";

const instance = axios.create({
  // Connected with ngrok. ngrok will shut dawn the connection after two hours.
  // To reconnect: Run "ngrok http 3000", then copy the new "Forwarding" URL to the baseURL.
  baseURL: "http://007875d2cf4f.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, //OnConfirmed
  (err) => {
    return Promise.reject(err);
  } //OnReject/ERROR
);

export default instance;
