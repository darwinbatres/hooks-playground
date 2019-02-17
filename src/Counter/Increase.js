import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CounterContext from "./CounterContext";

const Increase = () => {
  const { increase, counterState } = useContext(CounterContext);

  return (
    <Button variant="contained" color="primary" onClick={increase}>
      Increase + [{counterState.count}]
    </Button>
  );
};

export default Increase;
