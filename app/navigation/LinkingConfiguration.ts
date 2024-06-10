import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from 'Routes';
import * as Linking from 'expo-linking';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL(`://`)],
  config: {
    screens: {
      Main: {
        screens: {
          TabCards: 'cards',
          TabHome: 'home',
          TabMenu: 'menu'
        }
      },
    },
  },
};

export default linking;
