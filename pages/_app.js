import "@/styles/globals.css";
import "../assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "@/utils/authContext";
import { DataProvider } from "@/utils/dataContext";
import DefaultLayout from "@/components/DefaultLayout";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <DataProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </DataProvider>
    </AuthProvider>
  );
}
