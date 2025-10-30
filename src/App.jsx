import './App.css'
import { Routes, Route } from 'react-router-dom'
import Api from './components/API/Api'
import AddData from './components/pages/AddData'
import Layout from './components/layout/Layout'
import PairOrNot from './components/pages/PairOrNot'
import CountLength from './components/pages/CountLength'
import AddNumbers from './components/pages/AddNumbers'
import CheckPassword from './components/pages/checkPassword'
function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/add-data" element={<AddData />} />
        <Route path="/pairOrNot" element={<PairOrNot />} />
        <Route path="/countLength" element={<CountLength />} />
        <Route path="/addNumbers" element={<AddNumbers />} />
        <Route path="/checkPassword" element={<CheckPassword />} />
      </Routes>
    </Layout>
  )
}

export default App
