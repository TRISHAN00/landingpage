import Subtitle from "./common/Subtitle";

export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="section-title">
        <Subtitle title={'What Students Say'} />
      </div>

      <div className="testimonial-card">
        <p>
          “This platform helped me understand React concepts clearly and
          practically.”
        </p>
        <strong>- Student Name</strong>
      </div>
    </section>
  )
}
