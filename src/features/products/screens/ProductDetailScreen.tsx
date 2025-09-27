import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProductsStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<ProductsStackParamList, 'ProductDetail'>;

const ProductDetailScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text>Product ID: {id}</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
