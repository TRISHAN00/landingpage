import Button from "./common/Button";
import Subtitle from "./common/Subtitle";

export default function Banner() {
  return (
    <section className="hero">
      <Subtitle
        title={"Master React Step by Step"}
        desc={"Build scalable and reusable UI components"}
      />
      <Button text={"Get Started"} />
    </section>
  );
}
