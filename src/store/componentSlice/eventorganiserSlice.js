import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("http://biztekminds.com/mycoolapp/allProLoc");
  const data = await response.json();
  return data;
});

export const fetchPropTypeData = createAsyncThunk(
  "data/fetchData",
  async () => {
    const response2 = await fetch(
      "http://biztekminds.com/mycoolapp/propertiesType"
    );
    const data1 = await response2.json();
    return data1;
  }
);

export const addDataAsync = createAsyncThunk("data/addData", async (data) => {
  try {
    const response = await fetch("http://biztekminds.com/mycoolapp/allProLoc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to add data");
    }

    const newData = await response.json();
    return newData;
  } catch (error) {
    throw error;
  }
});

export const updateDataAsync = createAsyncThunk(
  "data/updateData",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://biztekminds.com/mycoolapp/allProLoc`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prop_id: data.prop_id,
            prop_name: data.prop_name,
            prop_address: data.prop_address,
            prop_capacity: data.prop_capacity,
            prop_img: data.prop_img,
            prop_type: data.prop_type,
            prop_city: data.prop_city,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const updatedData = await response.json();
      return updatedData;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDataAsync = createAsyncThunk(
  "data/deleteData",
  async (prop_id) => {
    await fetch(`http://biztekminds.com/mycoolapp/allProLoc/${prop_id}`, {
      method: "DELETE",
    });
    return prop_id;
  }
);

export default createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addDataAsync.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateDataAsync.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.data.splice(index, 1, action.payload);
        }
      })
      .addCase(deleteDataAsync.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      });
  },
}).reducer;
