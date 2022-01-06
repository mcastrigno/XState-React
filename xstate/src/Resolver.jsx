import { useMachine } from "@xstate/react";
import { promiseMachine } from "./MattsMachine";

const Resolver = () => {
  const [state, send] = useMachine(promiseMachine);

  return (
    <div>
      <button onClick={() => send("RESOLVE")}>I'm another resolver</button>
    </div>
  );
};

export default Resolver;
