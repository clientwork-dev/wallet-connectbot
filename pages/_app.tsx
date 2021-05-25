import "../styles/globals.css";
import Layout from '../layout/Layout';
import  AppProps  from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";

function App({Component, pageProps}){
return (
  <Layout>
  <Component {...pageProps} />
</Layout>
)
//<Component, {...pageProps} />
}
  //{ Component, pageProps }: AppProps) => (
  //<>
   
  //</>
//)

export default App;