import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "../components/Container/Container";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
