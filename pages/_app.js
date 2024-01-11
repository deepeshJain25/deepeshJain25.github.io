import "@/styles/globals.css";
import "../assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "@/utils/authContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
