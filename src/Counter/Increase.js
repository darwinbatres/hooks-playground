import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CounterContext from "./CounterContext";

const Increase = () => {
  const { increase } = useContext(CounterContext);

  return (
    <Button variant="contained" color="primary" onClick={increase}>
      Increase +
    </Button>
  );
};

export default Increase;
