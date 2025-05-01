import React from 'react';

const RenderizaBackOuFront = () => {

  function escolherRenderizacao(tecnologia) {

    if (tecnologia === "Java") {
      return <h1>Backend</h1>;
    } else if (tecnologia === "React") {
      return <b>Frontend</b>;
    } else if (tecnologia === "AWS") {
      return <em>Cloud</em>;
    }
  }

  return (
    <div>
      {escolherRenderizacao("Java")}
      {escolherRenderizacao("React")}
      {escolherRenderizacao("AWS")}
    </div>
  );
};

export default RenderizaBackOuFront;

