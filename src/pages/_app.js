import '@/styles/globals.css';
import Sidebar from '../../components/Sidebar';
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;

export default function App({ Component, pageProps }) {
  return (
  <Sidebar>
  <Component {...pageProps} /> 
  <Analytics />
  </Sidebar>
  );
}
