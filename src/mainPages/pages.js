import React from "react";
import { Routes,Route } from 'react-router-dom';
import AddProfile from "../Components/AddProfile";
import MyProfile from "../Components/MyProfile";
import StudentProfile from "../Components/StudentProfile";
import TeacherProfile from "../Components/TeacherProfile";
import SchoolProfile from "../Components/SchoolProfile";
const Pages = ()=>{
    return (
        <>
            <Routes>
                <Route exact path="/" element={<MyProfile/>}/>
                <Route exact path="/school" element={<SchoolProfile/>}/>
                <Route exact path="/teacher" element={<TeacherProfile/>}/>
                <Route exact path="/student" element={<StudentProfile/>}/>
                <Route exact path="/add" element={<AddProfile/>}/>
            </Routes>
        </>
    )
}

export default Pages;