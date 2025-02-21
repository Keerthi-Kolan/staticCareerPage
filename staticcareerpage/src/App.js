import Application from "./components/ApplicationPage/Application.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
function App() {
  return (
    <div>
      <NavigationBar />
      <div className="content">
        <Application />
      </div>
    </div>
  );
}

export default App;
