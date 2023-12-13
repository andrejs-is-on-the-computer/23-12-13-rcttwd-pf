import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    // <div>
    //   <Navbar />
    //   <div className="h-screen w-screen grid grid-cols-2 absolute">
    //     <div className="bg-black">
    //       1
    //     </div>
    //     <div className="bg-white">
    //       2
    //     </div>
    //     <div className="bg-yellow-200">
    //       3
    //     </div>
    //     <div className="bg-green-500">
    //       4
    //     </div>
    //     <div className="bg-black">
    //       5
    //     </div>
    //     <div className="bg-white">
    //       6
    //     </div>
    //     <div className="bg-yellow-200">
    //       7
    //     </div>
    //     <div className="bg-green-500">
    //       8
    //     </div>
    //     <div className="bg-white group-hidden">
    //       9
    //     </div>
    //     <div className="bg-black group hover:col-span-2">
    //       10
    //     </div>
    //   </div>
    //   <Home />
    //   <About />
    // </div>

    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;