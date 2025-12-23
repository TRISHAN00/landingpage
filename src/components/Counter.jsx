import Subtitle from "./common/Subtitle";

export default function Counter() {
  return (
    <section className="container">
      <div className="section-title">
        <Subtitle title={'Platform Statistics'} />
      </div>

      <div className="stats">
        <div className="stat-box">
          <h3>5,000+</h3>
          <p>Students</p>
        </div>
        <div className="stat-box">
          <h3>50+</h3>
          <p>Courses</p>
        </div>
        <div className="stat-box">
          <h3>120+</h3>
          <p>Projects</p>
        </div>
      </div>
    </section>
  )
}
