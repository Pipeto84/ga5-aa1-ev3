import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  Usuario: "",
  contrasena: "",
  acceso: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.Usuario = action.payload.Usuario;
      state.contrasena = action.payload.contrasena;
      state.acceso = action.payload.acceso;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;