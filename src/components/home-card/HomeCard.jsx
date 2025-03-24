import "./HomeCard.css";

export default function HomeCard({image, title, description}) {
  return (
    <div class="mt-4 d-flex flex-column align-items-center">
      <img src={image} alt="title" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
