//Paso 1.5
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

import {Navbar} from '../components/ui/Navbar';
import LoginScreen  from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/**Paso 1.6 */}
                <Routes> 
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/*" element={<DashboardRoutes />} />
                </Routes>
            </div>
        </Router>
    )
}


// import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route
//   } from 'react-router-dom';


// import { LoginScreen } from '../components/login/LoginScreen';
// import { DashboardRoutes } from './DashboardRoutes';


// export const AppRouter = () => {
//     return (
//         <Router>
//             <div>
//                 <Switch> 
//                     <Route exact path="/login" component={ LoginScreen } />
                    
//                     <Route path="/" component={ DashboardRoutes } />
//                 </Switch>
//             </div>
//         </Router>
//     )
// }
