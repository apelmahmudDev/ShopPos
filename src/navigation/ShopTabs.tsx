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
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

const Tabs = createBottomTabNavigator<ShopTabsParamList>();
const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();

const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <MaterialIcons name="home" size={size} color={color} />
);

const ProductsIcon = ({ color, size }: { color: string; size: number }) => (
  <MaterialIcons name="workspaces" size={size} color={color} />
);

const CartIcon = ({ color, size }: { color: string; size: number }) => (
  <MaterialIcons name="shopping-basket" size={size} color={color} />
);

const ProfileIcon = ({ color, size }: { color: string; size: number }) => (
  <MaterialIcons name="person" size={size} color={color} />
);

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
      tabBarActiveTintColor: '#EC458D',
      tabBarInactiveTintColor: 'gray',
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeScreen}
      options={{ tabBarIcon: HomeIcon }}
    />
    <Tabs.Screen
      name="ProductsStack"
      component={ProductsNavigator}
      options={{ tabBarIcon: ProductsIcon, title: 'Products' }}
    />
    <Tabs.Screen
      name="Cart"
      component={CartScreen}
      options={{ tabBarIcon: CartIcon }}
    />
    <Tabs.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ tabBarIcon: ProfileIcon }}
    />
  </Tabs.Navigator>
);

export default ShopTabs;
