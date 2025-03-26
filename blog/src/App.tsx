import './App.css'
import CategorySection from './components/CategorySection'
import Post from './components/Post'
import SideBar from './components/Sidebar'

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex-col">
        <CategorySection />
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default App
