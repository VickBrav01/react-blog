import "./content.css";

function Content(MainContent) {
  return (
    <div className="content">
      <h1>{MainContent.title}</h1>
      <p>{MainContent.Content}</p>
      <p>{MainContent.time}</p>
    </div>
  );
}

export default Content;
