import { createSlice } from '@reduxjs/toolkit'
// Define a type for the slice state
export type TUser = {
    userId: string;
    role: string;
    iat: number;
    exp: number;
  };
  
  type TAuthState = {
    user: null | TUser;
    token: null | string;
  };
  
  const initialState: TAuthState = {
    user: null,
    token: null,
  };
export const adminAuth = createSlice({
    name: 'Auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
})

export const { setUser, logout } = adminAuth.actions

// Other code such as selectors can use the imported `RootState` type

export default adminAuth.reducer