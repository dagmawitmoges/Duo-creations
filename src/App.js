// local imports
import Care from "./views/book";
import Footer from "./views/Footer";
import Reference from "./views/Reference";
// import Services from "./views/Services";
import Location from './views/location';
import Landing from "./views/landing";
function App() {
  return (
    <>
    
      <Landing />
      {/* <Services /> */}
      <Location />
      <Reference />
      <Care />
      <Footer />
    </>
  );
}

export default App;
