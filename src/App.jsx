import { Link, Route, Routes, useParams } from 'react-router-dom';


const Home = () => <h2>Home</h2>
const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]

  return (
    <div>
      <h2>Search Page</h2>
      <ul>
        {tacos.map(taco => (<li><Link key={taco} to={`/tacos/${taco}`}>{taco+' '}</Link></li>))}
      </ul>
    </div>
  )
}

const Tacos = () => {
const { taco } = useParams()
  return <div>
    <h2>Tacos</h2>
    {taco}
  </div>
}

function App() {
  return (
    <div>
      <header>
        <h1>MyPage</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search-page">Search Page</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tacos/:taco' element={<Tacos />} />
      </Routes>
    </div>
  )
}

export default App