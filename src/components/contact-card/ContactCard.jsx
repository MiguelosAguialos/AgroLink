import "./ContactCard.css";

export default function ContactCard({image, title, description}) {
  return (
    <div class="mt-4 d-flex flex-column align-items-center justify-content-top">
        <div class="icon-box">
            <i class={image}></i>
        </div>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  );
}
