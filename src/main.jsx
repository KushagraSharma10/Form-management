import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { LocalizationProvider } from "@mui/x-date-pickers";
// If you are using date-fns v3.x or v4.x, please import `AdapterDateFns`
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// If you are using date-fns v2.x, please import the v2 adapter


import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <App />
    </LocalizationProvider>
  </StrictMode>
);
