import React,{ Suspense,lazy } from 'react'
import ReactDOM from 'react-dom/client'

//Base__Components
import App from './App'

// const App = lazy(() => import('./App'));

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './Components/PageComponent/NavBar'
import { LoginScreen } from './Components/Screens/LoginScreen';
import { RegisterScreen } from './Components/Screens/RegisterScreen';
import {  Footer } from './Components/PageComponent/Footer';

import  {ProfileScreen}  from'./Components/Screens/ProfileScreen'
import  {PolicyViewScreen}  from './Components/Screens/PolicyViewScreen'
import  {PolicySceen }  from  './Components/Screens/PolicyScreen'
import  {FilesScreen}   from './Components/Screens/FilesScreen'
import  {FilesViewScreen}  from './Components/Screens/FilesViewScreen'
import  {UserProfileApproval} from './Components/Screens/Admin/User/UserProfileApproval'
import  {UserPolicyApproval}  from './Components/Screens/Admin/User/UserPolicyApproval'
import  {UserViewScreen}  from './Components/Screens/Admin/views/UserViewScreen'


//Base__styles
import './index.css'
import { Loader } from './Components/PageComponent/Loader';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorBoundry';

// const  ProfileScreen  = lazy(() => import('./Components/Screens/ProfileScreen')) ;
// const  ProfileScreen  = loadable(() => import('./Components/Screens/ProfileScreen')) ;
// const  PolicyViewScreen  = React.lazy(() => import('./Components/Screens/PolicyViewScreen'));
// const  PolicySceen   = React.lazy(() => import( './Components/Screens/PolicyScreen'));
// const  FilesScreen   = React.lazy(() => import('./Components/Screens/FilesScreen'));
// const  FilesViewScreen  =  React.lazy(() => import('./Components/Screens/FilesViewScreen'));
// const  UserProfileApproval = React.lazy(() => import('./Components/Screens/Admin/User/UserProfileApproval'));
// const  UserPolicyApproval  = React.lazy(() => import('./Components/Screens/Admin/User/UserPolicyApproval'));
// const  UserViewScreen  = React.lazy(() => import('./Components/Screens/Admin/views/UserViewScreen'));



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>

        <NavBar/>
        <ErrorBoundary FallbackComponent={ ErrorFallback } onReset={() => {}}>
        <Suspense fallback={<Loader/>}>
        <Routes>
            {/* main Routes */}
            <Route path='/' element={<App/>}></Route>
            <Route path='/login' element={<LoginScreen/>}></Route>
            <Route path='/register' element={<RegisterScreen/>}></Route>
          
            
            <Route path="/user/profile" element={<ProfileScreen/>}></Route>
            <Route path="/user/policy" element={<PolicySceen/>}></Route>
            <Route path="/user/policy/view" element={<PolicyViewScreen/>}></Route>
            <Route path="/user/files" element={<FilesScreen/>}></Route>
            <Route path="/user/files/view" element={<FilesViewScreen/>}></Route>  

            {/* AdminRoutes */}
    
            <Route path="/user/admin/profileapproval" element={<UserProfileApproval/>}/>
            <Route path="/user/admin/policyapproval" element={<UserPolicyApproval/>}/>
            <Route path="user/admin/user/view" element={<UserViewScreen/>}/>
          </Routes>
          </Suspense> 
          </ErrorBoundary>
        <Footer/>
    </BrowserRouter>
  </React.StrictMode>
)
