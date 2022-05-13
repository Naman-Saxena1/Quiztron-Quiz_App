import { PaletteOptions } from "@mui/material";
import React from "react";

declare module '@mui/material/styles' {
    interface PaletteOptions { 
        type?: 'light'| 'dark'
    }
}