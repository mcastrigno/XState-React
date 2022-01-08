import "./App.css";
import MattsMachineControl from "./MattsMachineControl";
import Resolver from "./Resolver";
import { MattsMachineGlobalStateProvider } from "./MattsMachineGlobalState";

function App() {
  return (
    <div className="App">
      <MattsMachineGlobalStateProvider>
        <MattsMachineControl />
        <Resolver />
      </MattsMachineGlobalStateProvider>
    </div>
  );
}

export default App;
