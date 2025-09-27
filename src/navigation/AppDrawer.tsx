import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import type { AppDrawerParamList } from '@/types/navigation';
import ShopTabs from './ShopTabs';
import OrdersScreen from '@/features/orders/screens/OrdersScreen';
import SettingsScreen from '@/features/settings/screens/SettingsScreen';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

const AppDrawer: React.FC = () => (
  <Drawer.Navigator
    screenOptions={{
      headerTitle: 'Shop POS',
      drawerType: 'front',
    }}
  >
    <Drawer.Screen
      name="Dashboard"
      component={ShopTabs}
      options={{ title: 'Dashboard' }}
    />
    <Drawer.Screen name="Orders" component={OrdersScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

export default AppDrawer;
