import axios from "axios";

export default axios.create({
  // Connected with ngrok. ngrok will shut dawn the connection after two hours.
  // To reconnect: Run "ngrok http 3000", then copy the new "Forwarding" URL to the baseURL.
  baseURL: "http://58a79405c882.ngrok.io",
});
