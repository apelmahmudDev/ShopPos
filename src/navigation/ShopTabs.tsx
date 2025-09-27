import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type {
  ShopTabsParamList,
  ProductsStackParamList,
} from '@/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsListScreen from '@/features/products/screens/ProductsListScreen';
import ProductDetailScreen from '@/features/products/screens/ProductDetailScreen';
import HomeScreen from '@/features/home/screens/HomeScreen';
import CartScreen from '@/features/cart/screens/CartScreen';
import ProfileScreen from '@/features/profile/screens/ProfileScreen';
// import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons' // optional

const Tabs = createBottomTabNavigator<ShopTabsParamList>();
const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();

const ProductsNavigator = () => (
  <ProductsStack.Navigator>
    <ProductsStack.Screen
      name="ProductsList"
      component={ProductsListScreen}
      options={{ title: 'Products' }}
    />
    <ProductsStack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{ title: 'Details' }}
    />
  </ProductsStack.Navigator>
);

const ShopTabs: React.FC = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      // tabBarIcon: (...) => <Icon name="home" size={20} />
    }}
  >
    <Tabs.Screen name="Home" component={HomeScreen} />
    <Tabs.Screen
      name="ProductsStack"
      component={ProductsNavigator}
      options={{ title: 'Products' }}
    />
    <Tabs.Screen name="Cart" component={CartScreen} />
    <Tabs.Screen name="Profile" component={ProfileScreen} />
  </Tabs.Navigator>
);

export default ShopTabs;
