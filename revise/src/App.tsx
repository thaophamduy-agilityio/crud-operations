// Components
import { Avatar } from "@components/"
import Gallery from "@components/Gallery/Gallery"

// Styles
import './App.css'

const App = () => {
  return (
    <>
      <div className="pass-props">
        <h2>Passing Props to a Component</h2>
        <Avatar
          size={40}
          person={{ 
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
          }}
        />
        <Avatar
          size={80}
          person={{
            name: 'Aklilu Lemma', 
            imageId: 'OKS67lh'
          }}
        />
        <Avatar
          size={160}
          person={{ 
            name: 'Katsuko Saruhashi', 
            imageId: 'YfeOqp2'
          }}
        />
      </div>
      <hr />
      <div className="gallery">
        <h2>State: A Component's Memory</h2>
        <Gallery />
        <Gallery />
      </div>
    </>
  )
}

export default App
