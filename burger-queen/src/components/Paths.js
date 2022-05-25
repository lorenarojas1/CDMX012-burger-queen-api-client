import {
    Routes,
    Route,
} from "react-router-dom";
import KitchenPage from "./Kitchen/Kitchen";
import LoginPage from "./Login/Login";
import WaiterPage from "./Waiter/Waiter";
import AdminPage from "./Admin/Admin";
import { login, logout } from '../lib/firebaseAuth.js'
import Orders from './Status/StatusForOrder'
import CrudApi from "./Waiter/ListStatus/CrudApi";



export default function Paths({ isAutenticate }) {
    return (
        <div>
            {isAutenticate ?
                <Routes>
                    <Route path="/" element={<LoginPage login={login}/>} />
                    <Route path="/Waiter" element={<WaiterPage logout={logout} />} />
                    <Route path="/Admin" element={<AdminPage logout={logout} />} />
                    <Route path="/Kitchen" element={<KitchenPage logout={logout} />} />
                    <Route path="/Orders" element={<Orders />} logout={logout}/>
                    <Route path="/CrudApi" element={<CrudApi />} logout={logout}/>
                </Routes> :
                <Routes>
                    <Route path="/" element={<LoginPage login={login}/>} />
                </Routes> }
        </div>);
}
