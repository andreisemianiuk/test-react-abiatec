import Header from './Header'
import ContentList from './ContentList'
import {useFetchContent} from '../hooks/useFetchContent'
import './App.css'
import FetchMoreButton from './FetchMoreButton'

const App = () => {
  const [content, fetch, fetchMore] = useFetchContent()
  
  return (
    <div className="App">
      <Header onSearch={fetch}/>
      <h1 className="Title">Simple content list</h1>
      <ContentList content={content}/>
      <FetchMoreButton onSearchMore={fetchMore}/>
      {/* TODO: Put FetchMoreButton component here */}
    </div>
  )
}

export default App
