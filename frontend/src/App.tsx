// import { Navbar } from "./components/navBar"
// import Home from "./screens/Home"
import Inicio from "./screens/Inicio"

export default function App() {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* <Navbar /> */}

      <main className="min-h-screen w-full overflow-x-hidden">
          <Inicio />
      </main>
    </div>
  )
}
