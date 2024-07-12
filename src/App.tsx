import { RouterProvider } from "react-router-dom"
import { Element } from "./Routes/Routes"

const App = () => {
  return (
    <RouterProvider router={Element}/>
  )
}

export default App