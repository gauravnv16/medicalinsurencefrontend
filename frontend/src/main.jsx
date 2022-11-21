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
import { createStore } from 'redux';
import { Allreducers } from './Reducers/AllReducers';
import { Provider } from 'react-redux';
import { ProfileEditScreen } from './Components/Screens/ProfileEditScreen';
import { AdminScreen } from './Components/Screens/AdminScreen';
import { FileUploadScreen } from './Components/Screens/FileUploadScreen';
import { PolicyClaimScreen } from './Components/Screens/PolicyClaimScreen';


const store = createStore(Allreducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Provider store={store}>
        <NavBar/>
        <Routes>
            {/* main Routes */}
            <Route path='/' element={<App/>}></Route>
            <Route path='/login' element={<LoginScreen/>}></Route>
            <Route path='/register' element={<RegisterScreen/>}></Route>
          
            
            <Route path="/user/profile" element={<ProfileScreen/>}></Route>
            <Route path="/user/:id/edit" element={<ProfileEditScreen/>}></Route>
            <Route path="/user/policy" element={<PolicySceen/>}></Route>
            <Route path="/user/policy/view" element={<PolicyViewScreen/>}></Route>
            <Route path="/user/policy/claim" element={<PolicyClaimScreen/>}></Route>
            <Route path="/user/files" element={<FilesScreen/>}></Route>
            <Route path="/user/files/view" element={<FilesViewScreen/>}></Route>  
            <Route path="/user/:id/files/upload" element={<FileUploadScreen/>}></Route>  

            {/* AdminRoutes */}
            <Route path="/user/admin" element={<AdminScreen/>}/>
            <Route path="/user/admin/profileapproval" element={<UserProfileApproval/>}/>
            <Route path="/user/admin/policyapproval" element={<UserPolicyApproval/>}/>
            <Route path="user/admin/:id/view" element={<UserViewScreen/>}/>
          </Routes>

        <Footer/>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
