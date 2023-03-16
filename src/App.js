import { Button } from "./ui";
const App = () => {
  return (
    <section>
      <div className="container">
        <h4>Solid Buttons</h4>
        <div className="list">
          <Button text="Primary" variant="primary" />
          <Button text="Secondary" variant="secondary" />
          <Button text="Success" variant="success" />
          <Button text="Warning" variant="warning" />
          <Button text="Danger" variant="danger" />
          <Button text="Info" variant="info" />
        </div>
        <h4>Outline Buttons</h4>
        <div className="list">
          <Button text="Primary" variant="outline-primary" />
          <Button text="Secondary" variant="outline-secondary" />
          <Button text="Success" variant="outline-success" />
          <Button text="Warning" variant="outline-warning" />
          <Button text="Danger" variant="outline-danger" />
          <Button text="Info" variant="outline-info" />
        </div>
        <h4>Disbaled Buttons</h4>
        <div className="list">
          <Button text="Primary" variant="primary" disabled />
          <Button text="Secondary" variant="secondary" disabled />
          <Button text="Success" variant="success" disabled />
          <Button text="Warning" variant="warning" disabled />
          <Button text="Danger" variant="danger" disabled />
          <Button text="Info" variant="info" disabled />
        </div>
        <div className="list">
          <Button text="Primary" variant="outline-primary" disabled />
          <Button text="Secondary" variant="outline-secondary" disabled />
          <Button text="Success" variant="outline-success" disabled />
          <Button text="Warning" variant="outline-warning" disabled />
          <Button text="Danger" variant="outline-danger" disabled />
          <Button text="Info" variant="outline-info" disabled />
        </div>
        <h4>Small Buttons</h4>
        <div className="list">
          <Button text="Primary" variant="primary" size="sm" />
          <Button text="Secondary" variant="secondary" size="sm" />
          <Button text="Success" variant="success" size="sm" />
          <Button text="Warning" variant="warning" size="sm" />
          <Button text="Danger" variant="danger" size="sm" />
          <Button text="Info" variant="info" size="sm" />
        </div>
        <h4>Large Buttons</h4>
        <div className="list">
          <Button text="Primary" variant="primary" size="lg" />
          <Button text="Secondary" variant="secondary" size="lg" />
          <Button text="Success" variant="success" size="lg" />
          <Button text="Warning" variant="warning" size="lg" />
          <Button text="Danger" variant="danger" size="lg" />
          <Button text="Info" variant="info" size="lg" />
        </div>
      </div>
    </section>
  );
};
export default App;
