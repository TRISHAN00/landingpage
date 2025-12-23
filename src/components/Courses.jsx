import Subtitle from "./common/Subtitle";
import CourseCard from "./course/CourseCard";

export default function Courses() {
  return (
    <section className="container">
      <div className="section-title">
        <Subtitle title={'Our Courses'} desc={'Learn React from beginner to advanced level'} />
      </div>

      <div className="card-grid">
        <CourseCard title={'React JS Course'} desc={'Describe basic.'} />
        <CourseCard title={'Next JS Course'} desc={'Talk about server side rendering'} />
        <CourseCard title={'Database'} desc={'Database design..'} /> 
      </div>
    </section>
  )
}
