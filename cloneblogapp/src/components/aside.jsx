import "./aside.css";

function Aside(MainContent) {
  return (
    <div>
      <a>{MainContent.title}</a>
    </div>
  );
}
export default Aside;
