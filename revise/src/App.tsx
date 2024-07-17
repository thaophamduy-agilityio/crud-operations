// Components
import { Avatar, Gallery, Accordion, SyncedInputs, FilterableList, VideoPlayer } from "@components/"

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
      <hr />
      <div className="share-state">
        <h2>Sharing State Between Components</h2>
        <div className="line-bottom-break"></div>
        <h2>Lifting state up</h2>
        <p>In this example, a parent Accordion component renders separate Panels:</p>
        <div className="arccordion">
          <Accordion />
        </div>
        <div className="line-bottom-break"></div>
        <h2>Synced inputs</h2>
        <p>These two inputs are independent. Make them stay in sync: editing one input should update the other input with the same text, and vice versa.</p>
        <div className="synced-inputs">
          <SyncedInputs />
        </div>
        <div className="line-bottom-break"></div>
        <h2>Filtering a list</h2>
        <p>
          In this example, the SearchBar has its own query state that controls the text input. Its parent FilterableList component displays a List of items, but it doesn’t take the search query into account.
        </p>
        <p>
          Use the FilterItems(foods, query) function to filter the list according to the search query. To test your changes, verify that typing “s” into the input filters down the list to “Sushi”, “Shish kebab”, and “Dim sum”.
        </p>
        <p>
          Note that filterItems is already implemented and imported so you don’t need to write it yourself!
        </p>
        <div className="filtering a list">
          <FilterableList />
        </div>
        <div className="line-bottom-break"></div>
      </div>
      <hr />
      <div className="use-effect">
        <h2>Synchronizing with Effects</h2>
        <div className="line-bottom-break"></div>
        <h2>Play/Pause Video</h2>
        <VideoPlayer />
      </div>
    </>
  )
}

export default App
