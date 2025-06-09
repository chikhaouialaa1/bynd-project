import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import { verifyToken } from "./utils/auth";
import { routes } from '../src/constants/routes'
import { Login } from './screens/public/Login'
import { Home } from './screens/private/Home'
import { Register } from './screens/public/Register'
import { RequestDetails } from './screens/private/RequestDetails'
import { RequestStats } from './screens/private/RequestStats'



function App() {

  return (
    <>
      <Routes>
        {/* PUBLIC */}
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.Request} element={<RequestDetails />} />
        <Route path={routes.dashboard} element={<RequestStats />} />

        {/* exemple */}
        {/* PRIVATE
        <Route path={routes.addArticle} element={
          <RequireAuth redirectTo={routes.login} >
            <AddArticles />
          </RequireAuth>
        } /> */}

        {/* UNKOWN path */}
        {/* <Route path="*" element={<Login />} /> */}
      </Routes>
    </>
  )
}

// @ts-ignore
const RequireAuth = ({ children, redirectTo }) => {
  let isAuthenticated = verifyToken();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default App
