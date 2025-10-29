import './App.css'
import { Routes, Route } from 'react-router-dom'
import Api from './components/API/Api'
import AddData from './components/pages/AddData'
import Layout from './components/layout/Layout'
import PairOrNot from './components/pages/PairOrNot'
import CountLength from './components/pages/CountLength'
import AddNumbers from './components/pages/AddNumbers'
function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/add-data" element={<AddData />} />
        <Route path="/pairOrNot" element={<PairOrNot />} />
        <Route path="/countLength" element={<CountLength />} />
        <Route path="/addNumbers" element={<AddNumbers />} />
      </Routes>
    </Layout>
  )
}

export default App
