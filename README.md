Lengkapi kode disamping, untuk merubah variable count dari 0 bertambah 1 setiap tombol tambah di klik menggunakan kaidah pada materi useReducer.

import React, { useReducer } from 'react';
import ReactDOM from "react-dom/client";
const initialState = { count: 0 };
function reducer(state) {
 // isi disini
}
function HitungComponent() {
 const [state, dispatch] = useReducer(reducer, initialState);
 return (
   <div>
     <p>Hitung: {state.count}</p>
     <button onClick={() => dispatch()}>Tambah</button>
   </div>
 );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HitungComponent />);
