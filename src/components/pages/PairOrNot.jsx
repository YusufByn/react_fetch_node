import { useState } from 'react'
import './PairOrNot.css'

function PairOrNot() {
    const [number, setNumber] = useState(0)
    const [result, setResult] = useState('')
    const handleCheck = async () => {

        const table = {number: number}
        const reponse = await fetch('http://localhost:3000/pairOrNot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(table)
        })
        const result = await reponse.json()
        setResult(result.message)
    }
    return (
        <div className="pair-or-not-container">
            <h1>Pair ou Impair</h1>
            <input type="number" placeholder="Entrez un nombre" 
            value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={handleCheck}>Vérifier</button>
            <p>{result}</p>
        </div>
    )
}

export default PairOrNot