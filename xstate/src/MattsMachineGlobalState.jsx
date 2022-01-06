import React, { createContext } from "react";
import { useInterpret } from "@xstate/react";
import { promiseMachine } from "./MattsMachine";

export const MattsMachineGlobalStateContext = createContext({});

export const GlobalStateProvider = (props) => {
  const promiseService = useInterpret(promiseMachine);

  return (
    <MattsMachineGlobalStateContext.Provider value={{ promiseService }}>
      {props.children}
    </MattsMachineGlobalStateContext.Provider>
  );
};
