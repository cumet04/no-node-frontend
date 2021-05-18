import React from 'https://cdn.skypack.dev/react@17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1';

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('root')
);
