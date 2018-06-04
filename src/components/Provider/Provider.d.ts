import * as React from 'react';
import ProviderConsumer from './ProviderConsumer';

export interface ProviderProps {
  [key: string]: any;

  fontFaces?: Array<{
    name: string;
    paths: string[];
    style: {
      fontStretch?: string;
      fontStyle?: string;
      fontVariant?: string;
      fontWeight?: string | number;
      localAlias?: string;
      unicodeRange?: string;
    };
  }>;

  siteVariables?: object;

  staticStyles?: Array<string | object | ((props: object) => object)>;

  children: React.ReactNode;
}

interface ProviderComponent extends React.StatelessComponent<ProviderProps> {
  Consumer: typeof ProviderConsumer;
}

declare const Provider: ProviderComponent;

export default Provider;
