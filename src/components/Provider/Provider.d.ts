import * as React from 'react';

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

declare const Provider: React.StatelessComponent<ProviderProps>;

export default Provider;
