import React from "react";
import Loadable from "react-loadable";

function Loading() {
  return <div>Loading...</div>;
}

export default Loadable({
  loader() {
    return import("./PanelA");
  },
  loading: Loading
});
