import React, { useReducer } from 'react';
import ReactDOM from "react-dom/client";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}
function HitungComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Hitung: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Tambah</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HitungComponent />);

export default HitungComponent
