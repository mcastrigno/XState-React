import React, { useContext } from "react";
import { MattsMachineGlobalStateContext } from "./MattsMachineGlobalState";
import { useSelector } from "@xstate/react";

const pendingSelector = (state) => {
  return state.matches("pending");
};

const rejectedSelector = (state) => {
  return state.matches("rejected");
};

const reslovedSelector = (state) => {
  return state.matches("resolved");
};

const MattsMachineControl = (props) => {
  const globalServices = useContext(MattsMachineGlobalStateContext);
  const isPending = useSelector(globalServices.promiseService, pendingSelector);
  const isRejected = useSelector(
    globalServices.promiseService,
    rejectedSelector
  );
  const isResolved = useSelector(
    globalServices.promiseService,
    reslovedSelector
  );

  // const [state, send] = useMachine(promiseMachine);
  const { send } = globalServices.promiseService;
  return (
    <div>
      {/** You can listen to what state the service is in */}
      {isPending && <p>Loading...</p>}
      {isRejected && <p>Promise Rejected</p>}
      {isResolved && <p>Promise Resolved</p>}
      <div>
        {/** You can send events to the running service */}
        <button onClick={() => send("RESOLVE")}>Resolve</button>
        <button onClick={() => send("REJECT")}>Reject</button>
      </div>
    </div>
  );
};

export default MattsMachineControl;
