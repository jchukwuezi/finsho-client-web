import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const MainLayout = ( {children} ) => {
  return (
    <Navbar>
        {children}
    </Navbar>
  )
}

export default MainLayout