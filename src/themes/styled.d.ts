import 'styled-components';
import { Theme } from '.';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: Theme;
    site: {
      background_color: string;
    };
    colors: {
      primary: string;
    };
  }
}
