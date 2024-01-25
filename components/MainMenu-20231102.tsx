'use client';
import { Context } from "@/context";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

const MainMenu = () => {

  const [ state, dispatch ] = useContext(Context)


  const [ successResponse, setSuccessResponse ] = useState<any>()
  
  useEffect(()=>{

    const registerDto = {
      name : "Parth",
      email : "meadez@gmailtemp.com",
      password: "12345678s9",
      Hello:"qwe"
    }

    // axios.post("http://localhost:5000/api/register",registerDto).then((res:any)=>{
    // axios.post("http://localhost:5000/api/register",registerDto).then((res:any)=>{
    //   setSuccessResponse(res)
    // }).catch((res:any)=>{
    //   setSuccessResponse(res)
    // })

    // axios.post("http://localhost:5000/api/login",registerDto).then((res:any)=>{
    //   setSuccessResponse(res)
    // }).catch((res:any)=>{
    //   setSuccessResponse(res)
    // })
  },[])

  const { response } = successResponse || 0;
  const { data } = response || 0;


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Midas 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div>
      <h1>Video Streaming Example</h1>
      <video controls width="600">
        <source src="http://localhost:5000/stream-video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
};

export default MainMenu;
