import { createElement } from "react"
import { Fragment } from "react";

function App() {

  const heading = 'React is awesome';

  return (
  <>
    <h1 id="myheading">{`My heading ${heading}`}</h1>
    <p>Web development using React is the best {4*5}</p>
  </>
  );

  // return (
  //   <Fragment id="something">
  //     <h1 className="myheading">I love React</h1>
  //     <p>Web dev bla bla bla</p>
  //   </Fragment>
  // );
}

export default App
