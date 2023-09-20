import { createSlice } from '@reduxjs/toolkit'

const seedlingSlice = createSlice({
  name: 'seedling',
  initialState: {
    currentSeedling: null
  },
  reducers: {
    setCurrentSeedling: (state, action) => {
      state.currentSeedling = action.payload
    }
  }
})

export const { setCurrentSeedling } = seedlingSlice.actions
export default seedlingSlice.reducer
