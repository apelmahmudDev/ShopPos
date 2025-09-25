import '@react-navigation/native';
declare module '@react-navigation/native' {
  export interface Theme {
    colors: Theme['colors'] & { onPrimary: string };
  }
}
