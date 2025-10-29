import { useState } from 'react'
import './AddNumbers.css'

function AddNumbers() {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [result, setResult] = useState(0)

    const handleAdd = async () => {
        const table = {firstNumber: number1, secondNumber: number2}
        const reponse = await fetch('http://localhost:3000/addNumbers', {
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
        <div className="add-numbers-container">
            <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} placeholder="Premier nombre" />
            <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} placeholder="Deuxième nombre" />
            <button onClick={handleAdd}>Add</button>
            <p>{result}</p>
        </div>
    )
}

export default AddNumbers