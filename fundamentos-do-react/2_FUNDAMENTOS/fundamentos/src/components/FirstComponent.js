import React from 'react'
import MyComponent from './MyComponent';

const FirstComponent = () => {
  return (
    // tudo que está dentro do return é JSX
    <div>
        <h1>Meu primeiro componente</h1>
        <MyComponent/>
    </div>
  );
};

export default FirstComponent;