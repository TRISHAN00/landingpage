export default function Subtitle({ title, desc }) {
  return (
    <>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </>
  );
}
