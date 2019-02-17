import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CounterContext from "./CounterContext";

const Decrease = () => {
  const { decrease } = useContext(CounterContext);

  return (
    <Button variant="contained" color="secondary" onClick={decrease}>
      Decrease -
    </Button>
  );
};

export default Decrease;
