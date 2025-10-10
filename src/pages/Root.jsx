import React from 'react';
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default Root;