import React from 'react'

const TemplateExpressions = () => {
    const name = "Adriane";
    const data = {
        age: 25,
        job: "Estudante",
    };

  return (
    <div>
        <h1>Olá {name}, tudo bem ? </h1>
        <p>Você atua como : {data.job}</p>
        <p>{4+4}</p>
        <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions;