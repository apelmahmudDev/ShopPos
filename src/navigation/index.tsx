import React, { useEffect, useRef, useState } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import { navigationRef } from '@/utils/navigation';

const AppTheme: Theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: '#ffffff' },
};

const linking = {
  prefixes: ['shoppos://', 'https://shoppos.example.com'],
  config: {
    screens: {
      Auth: {
        screens: {
          SignIn: 'signin',
          SignUp: 'signup',
          ForgotPassword: 'forgot',
        },
      },
      App: {
        screens: {
          Dashboard: {
            screens: {
              Home: 'home',
              ProductsStack: {
                screens: {
                  ProductsList: 'products',
                  ProductDetail: 'products/:id',
                },
              },
              Cart: 'cart',
              Profile: 'profile',
            },
          },
          Orders: 'orders',
          Settings: 'settings',
          Help: 'help',
        },
      },
    },
  },
};

const NavContainer: React.FC = () => {
  // Optional: persist/restore nav state
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const [initialState, setInitialState] = useState<any>();
  const [isReady, setIsReady] = useState(false);
  const routeNameRef = useRef<string>(null);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) return null;

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={AppTheme}
      linking={linking}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef.getCurrentRoute()?.name;
        if (routeNameRef.current !== currentRouteName) {
          // hook analytics here
        }
        routeNameRef.current = currentRouteName;
      }}
      initialState={initialState}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

export default NavContainer;
