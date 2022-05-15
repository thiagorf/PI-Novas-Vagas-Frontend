
import { Content } from "./components/Content";
import { CreateVaga } from "./components/CreateVaga";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import "./index.css"
import Router from "./routes/Router";



function App() {

  return (
    <div className="container">
      <Header />
      <Router />
    </div>
  )
}

export default App
