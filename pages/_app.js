import "@/styles/globals.css";
import "../assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "@/utils/authContext";
import DefaultLayout from "@/components/DefaultLayout";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </AuthProvider>
  );
}
