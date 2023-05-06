import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: {
    data: [
      {
        id: 1,
        type: "Fee Refund",
        rollno: "20I-1756",
        sent: true,
        to: "CS",
        date: "2023-01-22",
        status: "Pending",
        priority: "Low",
        description: "I want to refund my fee",
      },
      {
        id: 2,
        type: "Admission",
        rollno: "20I-4456",
        sent: false,
        to: "IT",
        date: "2023-01-10",
        status: "Pending",
        priority: "Low",
        description: "I want TO get admission in this university",
      },
      {
        id: 3,
        type: "Leave Application",
        rollno: "20I-1756",
        sent: false,
        to: "CS",
        date: "2023-02-10",
        status: "Rejected",
        priority: "Normal",
        description: "I want to get leave for 2 days",
      },
      {
        id: 4,
        type: "Scholarship",
        rollno: "20I-0458",
        sent: false,
        to: "CS",
        date: "2023-05-10",
        status: "Approved",
        priority: "High",
        description: "I want to get scholarship",
      },
    ],
  },
};

export const ReducerSlice = createSlice({
  name: "SE-Project",
  initialState,
  reducers: {
    setAppData: (state, action) => {
      state.client.data = action.payload;
    },
  },
});

export const { setAppData } = ReducerSlice.actions;

export default ReducerSlice.reducer;
