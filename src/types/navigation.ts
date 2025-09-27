export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type ShopTabsParamList = {
  Home: undefined;
  ProductsStack: undefined; // nested stack
  Cart: undefined;
  Profile: undefined;
};

export type ProductsStackParamList = {
  ProductsList: undefined;
  ProductDetail: { id: string };
};

export type AppDrawerParamList = {
  Dashboard: undefined; // hosts bottom tabs
  Orders: undefined;
  Settings: undefined;
  Help: undefined;
};

export type RootStackParamList = {
  // If you want a top-level modal/overlay screens, add here
  App: undefined; // drawer shell
  Auth: undefined; // auth stack
  Splash: undefined;
};
