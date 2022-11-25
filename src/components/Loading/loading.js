import React from "react";
import "./loading.css";
import CircularProgress from '@mui/material/CircularProgress';


export default function Loading() {
 

  return (
    <div className="MLHLoading">
        
        <CircularProgress size={100} color="secondary" />
    </div>
  );
}
