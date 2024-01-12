import "@/styles/globals.css";
import "../assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "@/utils/authContext";
import { DataProvider } from "@/utils/dataContext";
import DefaultLayout from "@/components/DefaultLayout";

// this component is the parent to all other components including index.js hence all the providers are used here to give context to the full app
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <DataProvider>
        {/* to add a layout having sidebar and header common for all pages */}
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </DataProvider>
    </AuthProvider>
  );
}
