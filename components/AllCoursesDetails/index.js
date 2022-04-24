import React from 'react'
import GetStart from '../CourseDetails/GetStart'
import Hero from '../CourseDetails/Hero'
import About from './About'
import Courses from './Courses'

export default function AllCourses() {
  return (
    <>
        <Hero/>
        <About />
        <Courses />
        <GetStart />
    </>
  )
}
