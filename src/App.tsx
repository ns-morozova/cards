import './App.css';
import Card from './components/Card';
import image1 from './img/OGk_LafG1xc.jpg'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px'}}>
      <Card title="Card with Image" imageSrc={image1}>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Card>
      <Card title="Card without Image">
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Card>
    </div>
  )
}

export default App
