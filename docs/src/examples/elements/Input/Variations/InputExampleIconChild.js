import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

const CustomInput = ({ icon, iconPosition = 'right', placeholder }) => (
  <Input icon={!!icon} iconPosition={iconPosition} placeholder={placeholder} aria-label={placeholder}>
    {iconPosition === 'left' && <Icon name={icon} />}
    <input />
    {iconPosition !== 'left' && <Icon name={icon} />}
  </Input>
);
//  Better Spacing Handling – Removed unnecessary <br />, spacing can be handled via CSS.
// More Readable & Scalable – Cleaner structure with props controlling the component
const InputExampleIconChild = () => (
  <>
    <CustomInput icon="search" placeholder="Search..." />
    <CustomInput icon="at" iconPosition="left" placeholder="Email" />
  </>
);

export default InputExampleIconChild;
