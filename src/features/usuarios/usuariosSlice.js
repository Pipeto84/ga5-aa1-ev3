import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    Usuario: "Felipe",
    contrasena: "12345",
  },
  {
    Usuario: "CristianH",
    contrasena: "13579",
  },
  {
    Usuario: "Cristian",
    contrasena: "24680",
  },
  {
    Usuario: "q",
    contrasena: "1",
  },
];

export const usuariosSlice = createSlice({
  name: "usuarios",
  initialState,
  reducers: {
    addUsuario: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUsuario } = usuariosSlice.actions;

export default usuariosSlice.reducer;