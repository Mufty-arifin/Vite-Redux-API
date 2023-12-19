import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const setAuthToken = (token) => {
  localStorage.setItem("token", token);
};

// Action untuk melakukan login dan mendapatkan token
export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (credentials) => {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();

    if (response.ok) {
      setAuthToken(data.token);
      return data; // Berhasil: kembalikan data yang diperlukan
    } else {
      // Gagal: kembalikan object error untuk ditangkap oleh .catch()
      throw new Error(data.error);
    }
  }
);

const authSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        Swal.fire({
          icon: "success",
          title: "Login Berhasil!",
        });
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: action.error.message,
        });
      });
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export const selectUser = (state) => state.login.user;
export default authSlice.reducer;

// export const fetchLogin = createAsyncThunk("fetchLogin", async (body) => {
//   const res = await fetch("https://reqres.in/api/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   return await res.json();
// });
// const authSlice = createSlice({
//   name: "user",
//   initialState:{
//     msg: "",
//     user: "",
//     token: "",
//     loading: false,
//     error: "",
//   },
//   reducers: {
//     addToken: (state) => {
//       state.token = localStorage.getItem("token");
//     },
//     addUser: (state) => {
//       state.user = localStorage.getItem("user");
//     },
//     logout: (state) => {
//       state.token = null;
//       localStorage.clear();
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchLogin.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(
//         fetchLogin.fulfilled,
//         (state, { payload: { error, msg, token, user } }) => {
//           state.loading = false;
//           if (error) {
//             state.error = error;
//           } else {
//             state.msg = msg;
//             state.token = token;
//             state.user = user;
//             localStorage.setItem("msg", msg);
//             localStorage.setItem("user", JSON.stringify(user));
//             localStorage.setItem("token", token);
//           }

//         }
//       )
//       .addCase(fetchLogin.rejected, (state) => {
//         state.loading = true;
//       });
//   },
// });

// export const { addToken, addUser, logout } = authSlice.actions;
// export default authSlice.reducer;
