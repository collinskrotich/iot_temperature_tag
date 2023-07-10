import '@/styles/globals.css';

import Sidebar from '../../components/Sidebar';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider,Theme, useTheme, View, Image } from '@aws-amplify/ui-react';



//Authenticator
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
import { useState, useEffect } from 'react';
Amplify.configure(awsExports);

// Modify signin page

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding="large">
        <Image
          alt="Amplify logo"
          src="/origami.webp"
        />
      </View>
    );
  }
}

  // Main function

export default function App({ Component, pageProps }) {

    // Loading feature

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(false);
    }, []);

  // Modify colors
  const { tokens } = useTheme();
  const theme = {
    name: 'Auth Example Theme',
    tokens: {
      colors: {
        background: {
          primary: {
            value: tokens.colors.white.value,
          },
          secondary: {
            value: tokens.colors.green.value,
          },
        },
        font: {
          interactive: {
            value: tokens.colors.black.value,
          },
        },
        brand: {
          primary: {
            '10': tokens.colors.white['100'],
            '80': tokens.colors.white['40'],
            '90': tokens.colors.white['20'],
            '100': tokens.colors.white['10'],
          },
        },
      },
      components: {
        tabs: {
          item: {
            _focus: {
              color: {
                value: tokens.colors.black.value,
              },
            },
            _hover: {
              color: {
                value: tokens.colors.yellow['80'].value,
              },
            },
            _active: {
              color: {
                value: tokens.colors.black.value,
              },
            },
          },
        },
      },
    },
  };



  return (
    <div>
    {isLoading ? <p>Loading...</p> : (
    <ThemeProvider theme={theme}>
  <Authenticator components={components}>
    {({ signOut, user }) => (
    <Sidebar>
      <Component {...pageProps} /> 
      <Analytics />
    </Sidebar>
    )}
  </Authenticator>
  </ThemeProvider>
    )}
    </div>
  );
}
