import React, { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

/**
 * Necessário converter a primeira letra com
 * maiusculo para que o react possa entender que é um componente
 */
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
