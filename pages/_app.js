import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState({});
  const router = useRouter();

  const fetchCurrentUser = async () => {
    try {
      const { data } = await axios.get("/api/login/current-user");
      setCurrentUser(data.currentUser);
    } catch (error) {
      console.error("Error fetching current user:", error);
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchCurrentUser();

    // Fetch on route change
    const handleRouteChange = () => fetchCurrentUser();
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the event listener
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (!!currentUser) {
    pageProps = { ...pageProps, currentUser };
  }

  return (
    <Layout currentUser={currentUser}>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  );
}

export default MyApp;
