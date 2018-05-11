import * as React from 'react';

export interface ProviderConsumerProps {
  [key: string]: any;

  children: React.ReactNode;
}

declare const ProviderConsumer: React.StatelessComponent<ProviderConsumerProps>;

export default ProviderConsumer;
