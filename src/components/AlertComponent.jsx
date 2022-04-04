import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

export default function AlertComponent({ mensagem }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Ops! Houve um erro!</Alert.Heading>
        <p>{ mensagem }</p>
      </Alert>
    );
  }
  return <button onClick={ () => setShow(true) }>Mostrar erro</button>;
}
