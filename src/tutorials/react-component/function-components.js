/**
  function FunctionComponent() {
    return jsx
  }

  const FunctionComponent = function () {
    return jsx
  }

  const FunctionComponent = () => {
    return jsx
  }
  
*/
const style = {
  padding: '1em',
  textAlign: 'center',
  marginBottom: '10px',
  backgroundColor: '#f1f1f1',
};

export const FunctionComponent1 = () => {
  return (
    <div style={style}>
      <h3>Hello React Function Component (1)</h3>
    </div>
  );
};

export const FunctionComponent2 = (props) => {
  //   console.log(props);
  return (
    <div style={style}>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </div>
  );
};

export const FunctionComponent3 = (props) => {
  //   console.log(props);
  return (
    <div style={style}>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
      {props.children}
    </div>
  );
};

export const FunctionComponent4 = (props) => {
  const { title, message, children } = props;
  return (
    <div style={style}>
      <h3>{title}</h3>
      <p>{message}</p>
      {children}
    </div>
  );
};

export const FunctionComponent5 = ({ title, message, children }) => {
  return (
    <div style={style}>
      <h3>{title}</h3>
      <p>{message}</p>
      {children}
    </div>
  );
};
