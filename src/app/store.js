import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import usuariosReducer from '../features/usuarios/usuariosSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    usuarios: usuariosReducer,
  },
});