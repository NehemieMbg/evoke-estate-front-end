import { IUserState } from '@/utils/types/evokeApi/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IUserState = {
  id: undefined,
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  title: '',
  location: '',
  description: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload as IUserState;
      state.id = user.id!;
      state.firstName = user.firstName;
      state.lastName = user.lastName;
      state.email = user.email;
      state.username = user.username;
      state.title = user.title;
      state.location = user.location;
      state.description = user.description;
    },
    clearUser: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
