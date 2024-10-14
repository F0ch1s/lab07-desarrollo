import React, {useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LoginContext } from './App1';

const PageStruct = () => {
    const { logout, isAuthenticated } = useContext(LoginContext);
    return (
        <>
            <nav className='Header'>
                <Link to='/'>Home</Link>
                <Link to='/login'>LogIn</Link>
                <Link to='/catalogo'>Catalogo</Link>
                {isAuthenticated && <button onClick={logout} className='LogoutButton'>LogOut</button>}
            </nav>
            <Outlet/>
        </>
    );
}

export default PageStruct;