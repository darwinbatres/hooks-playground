import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CounterContext from "./CounterContext";

const Decrease = () => {
  const { decrease, counterState } = useContext(CounterContext);

  return (
    <Button variant="contained" color="secondary" onClick={decrease}>
      Decrease - [{counterState.count}]
    </Button>
  );
};

export default Decrease;
