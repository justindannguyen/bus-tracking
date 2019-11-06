import React from 'react'
import {
  useLocation
} from "react-router-dom";

export default function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        Page could not be found <code>{location.pathname}</code>
      </h3>
    </div>
  );
}