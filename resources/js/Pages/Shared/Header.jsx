import NavLink from '@/Components/NavLink';
// import React from 'react';
import logo from '../../../../public/assets/img/logo/logo.png';
import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
      const fetchUserData = async () => {
          try {
              const response = await axios.get('/api/student');
              setUser(response.data);
          } catch (error) {
              console.error('Error fetching user data:', error);
          }
      };

      fetchUserData();
  }, []);
    return (
        <>
<header>
      {/* Header Start */}
      <div className="header-area header-transparent">
        <div className="main-header ">
          <div className="header-bottom  header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10">
                  <div className="menu-wrapper d-flex align-items-center justify-content-end">
                    {/* Main-menu */}
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li className="active"><NavLink href="/">Home</NavLink></li>
                          <li><NavLink href="/about">About</NavLink></li>
                          <li><NavLink href="/mycourses">Courses</NavLink></li>
                          <li>
                            <a href="#">Admin | Instructor </a>
                            <ul className="submenu">
                              <li><a href="/admin/login">Admin</a></li>
                              <li><a href="/instructor/dashboard">Instructor</a></li>
                            </ul>
                          </li>
                          <li><NavLink href="/contact">Contact</NavLink></li>
                          {/* Button */}
                          <li className="button-header margin-left "><a href="" className="btn">Name</a></li>
                          <li className="button-header"><a href="/student/login" className="btn btn3">Log in</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </header>
        </>
    );
};

export default Header;