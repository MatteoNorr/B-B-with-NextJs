import DefaultLayout from "../Components/DefaultLayout";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
