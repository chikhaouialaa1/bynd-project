import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import { verifyToken } from "./utils/auth";
import { routes } from '../src/constants/routes'
import { Login } from './screens/Login'
import { Home } from './screens/Home'
import { Register } from './screens/Register'
import { Article } from './screens/public/Article'
import { AddArticles } from './screens/private/AddArticles'
import { EditActicles } from './screens/private/EditActicles'

function App() {

  return (
    <>
      <Routes>
        {/* PUBLIC */}
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.article} element={<Article />} />
        {/* PRIVATE */}
        <Route path={routes.addArticle} element={
          <RequireAuth redirectTo={routes.login} >
            <AddArticles />
          </RequireAuth>
        } />
        <Route path={routes.EditArticle} element={
          <RequireAuth redirectTo={routes.login} >
            <EditActicles />
          </RequireAuth>
        } />
        {/* UNKOWN path */}
        <Route path="*" element={<Login />} />
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
