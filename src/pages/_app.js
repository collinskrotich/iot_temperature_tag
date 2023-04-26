import '@/styles/globals.css';
import Sidebar from '../../components/Sidebar';
import { Analytics } from '@vercel/analytics/react';

//Authenticator
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '.././aws-exports';
Amplify.configure(awsExports);

export default function App({ Component, pageProps }) {
  return (
  <Authenticator variation="modal">
    <Sidebar>
    <Component {...pageProps} /> 
    <Analytics />
    </Sidebar>
  </Authenticator>
  );
}
