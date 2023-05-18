import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("http://biztekminds.com/mycoolapp/allProducts");
  const data = await response.json();
  return data;
});

export const addDataAsync = createAsyncThunk("data/addData", async (data) => {
  const response = await fetch("http://biztekminds.com/mycoolapp/allProducts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const newData = await response.json();
  return newData;
});

export const updateDataAsync = createAsyncThunk(
  "data/updateData",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://biztekminds.com/mycoolapp/updatePro`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: data.id,
            sc_cat: data.sc_cat,
            productImage: data.productImage,
            productDesc: data.productDesc,
            price: data.price,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const updatedData = await response.json();
      return updatedData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteDataAsync = createAsyncThunk(
  "data/deleteData",
  async (id) => {
    await fetch(`http://biztekminds.com/mycoolapp/product/${id}`, {
      method: "DELETE",
    });
    return id;
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
