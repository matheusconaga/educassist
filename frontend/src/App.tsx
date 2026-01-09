import { Navbar } from "./components/navBar"
import Home from "./screens/Home"

export default function App() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Navbar />

      <main className="min-h-screen w-full overflow-x-hidden">
          <Home />
      </main>
    </div>
  )
}
