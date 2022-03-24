import "../styles/globals.css";
import HomepageLayout from "../components/Layout/HomepageLayout";

function MyApp({ Component, pageProps }) {
  return (
    <HomepageLayout suppressHydrationWarning>
      {typeof window === "undefined" ? null : <Component {...pageProps} />}
    </HomepageLayout>
  );
}

export default MyApp;
