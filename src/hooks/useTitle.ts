import React from 'react'
import { APP_TITLE } from "config/environment";

function UseTitle() {
  React.useEffect(()=>{
    const prevTitle = document.title;
    const newTitle = title ? title : APP_TITLE;
    document.title = `${prevTitle} - ${newTitle}`;
    return () =>{
      document.title = prevTitle;
    }
  })
}

export default UseTitle
