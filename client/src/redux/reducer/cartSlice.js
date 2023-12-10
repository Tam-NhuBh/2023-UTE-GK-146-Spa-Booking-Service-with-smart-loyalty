import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Tạo async thunk để lấy số lượng sản phẩm trong giỏ hàng từ API
// export const fetchCartItemCount = createAsyncThunk(
//   'cart/fetchCartItemCount',
//   async (userId, thunkAPI) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/cart/cart?userId=${userId}`);
//       console.log("So luong ",response.data.data.length)
//       return response.data.data.length; // Đảm bảo API trả về số lượng sản phẩm trong giỏ hàng
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

export const fetchCartItemDetail = createAsyncThunk(
  'cart/fetchCartItemDetail',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:8000/cart/oncart?userId=${userId}`);
      console.log(response.data.data)
      return response.data.data; // Thông tin chi tiết của sản phẩm trong giỏ hàng
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, idProduct, quantity }, thunkAPI) => {
    try {
      console.log(userId, quantity, idProduct)
      const response = await axios.post(`http://localhost:8000/cart/addToCart`, { userId, idProduct, quantity });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const dfetchdetail = createAsyncThunk(
  'cart/dfetchdetail',
  async ({ userId, idProduct, quantity }, thunkAPI) => {
    try {
      console.log("Xoa",userId, quantity, idProduct)
      const response = await axios.post(`http://localhost:8000/cart/dfetchdetail`, { userId, idProduct, quantity});
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const rfetchdetail = createAsyncThunk(
  'cart/rfetchdetail',
  async ({ userId, idProduct}, thunkAPI) => {
    try {
      console.log(userId,idProduct)
      const response = await axios.post(`http://localhost:8000/cart/rfetchdetail`, { userId, idProduct});
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const removeAllProduct = createAsyncThunk(
  'cart/removeAllProduct',
  async ({ userId}, thunkAPI) => {
    try {
      console.log(userId)
      const response = await axios.post(`http://localhost:8000/cart/removeAllProduct`, { userId});
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
// Redux slice của cart
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    userId: null,
    itemCount: 0,
    cartItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchCartItemCount.pending, (state) => {
      //   state.loading  = true;
      //   state.error = null;
      // })
      // .addCase(fetchCartItemCount.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.itemCount = action.payload;
      // })
      // .addCase(fetchCartItemCount.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // })
      .addCase(fetchCartItemDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItemDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload; 
        let totalCount = 0;
        const cartItems = action.payload || []; // Danh sách sản phẩm trong giỏ hàng
        cartItems.forEach((item) => {
          totalCount += item.quantity; // Cộng dồn quantity từ từng sản phẩm
        });

        state.itemCount = totalCount;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload; 
        let totalCount = 0;
        const cartItems = action.payload || []; // Danh sách sản phẩm trong giỏ hàng
        cartItems.forEach((item) => {
          totalCount += item.quantity; // Cộng dồn quantity từ từng sản phẩm
        });

        state.itemCount = totalCount;

      })
      .addCase(addToCart.pending, (state) => {
        state.loading  = true;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(dfetchdetail.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload; 
        let totalCount = 0;
        const cartItems = action.payload || []; // Danh sách sản phẩm trong giỏ hàng
        cartItems.forEach((item) => {
          totalCount += item.quantity; // Cộng dồn quantity từ từng sản phẩm
        });

        state.itemCount = totalCount;
      })
      .addCase(dfetchdetail.pending, (state) => {
        state.loading  = true;
        state.error = null;
      })
      .addCase(dfetchdetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(rfetchdetail.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload; 
        let totalCount = 0;
        const cartItems = action.payload || []; // Danh sách sản phẩm trong giỏ hàng
        cartItems.forEach((item) => {
          totalCount += item.quantity; // Cộng dồn quantity từ từng sản phẩm
        });

        state.itemCount = totalCount;
      })
      .addCase(rfetchdetail.pending, (state) => {
        state.loading  = true;
        state.error = null;
      })
      .addCase(removeAllProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeAllProduct.pending, (state) => {
        state.loading  = true;
        state.error = null;
      })
      .addCase(removeAllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload; 
        let totalCount = 0;
        const cartItems = action.payload || []; // Danh sách sản phẩm trong giỏ hàng
        cartItems.forEach((item) => {
          totalCount += item.quantity; // Cộng dồn quantity từ từng sản phẩm
        });

        state.itemCount = totalCount;
      })
      
  },
});


export const { setUserId } = cartSlice.actions;

export default cartSlice.reducer;