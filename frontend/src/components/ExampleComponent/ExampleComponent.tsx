import React from 'react';
import * as styles from './ExampleComponent.styles';
import { useExampleComponent } from './useExampleComponent';

const ExampleComponent: React.FC = () => {
  const { count, increment } = useExampleComponent();

  return (
    <styles.Container>
      <h1>Ejemplo de Componente</h1>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </styles.Container>
  );
};

export default ExampleComponent;