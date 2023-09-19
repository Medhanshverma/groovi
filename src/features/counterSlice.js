import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
  status: 'idle',
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.value = action.payload.value;
    },  
  },
  
});

export const { enterRoom } = counterSlice.actions;

export const selectRoomId = (state) => state.counter.value;

export default counterSlice.reducer;
