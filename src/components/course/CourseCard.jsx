
import Button from '../common/Button';
export default function CourseCard({title, desc}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <Button text={"View Details"} />
    </div>
  );
}
