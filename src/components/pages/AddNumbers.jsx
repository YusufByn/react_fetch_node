import { useState } from 'react'

function AddNumbers() {
    // on declare une variable d'état pour le premier nombre    
    const [number1, setNumber1] = useState(0)
    // on declare une variable d'état pour le deuxième nombre
    const [number2, setNumber2] = useState(0)
    // on declare une variable d'état pour le résultat
    const [result, setResult] = useState(0)

    // on crée une fonction pour ajouter les deux nombres
    const handleAdd = async (e) => {
        e.preventDefault()
        // on declare une variable pour envoyer les données au backend
        const table = {firstNumber: number1, secondNumber: number2}
        // on fetch les données en utilisant l'url de l'api
        const reponse = await fetch('http://localhost:3000/addNumbers', {
            // on utilise la méthode POST pour envoyer les données
            method: 'POST',
            // on utilise le header Content-Type pour spécifier que les données sont en json
            headers: {
                'Content-Type': 'application/json'
            },
            // on utilise le body pour envoyer les données en json
            body: JSON.stringify(table)
        })
        // on transforme la réponse en json
        const result = await reponse.json()
        // on set le résultat dans la variable d'état result
        setResult(result.message)
    }
    return (
        <div className="add-numbers-container">
            <h1>Addition de deux nombres</h1>
            <form onSubmit={handleAdd}>
                <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} placeholder="Premier nombre" />
                <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} placeholder="Deuxième nombre" />
                <button type="submit">Ajouter</button>
            </form>
            <p>Le résultat de l'addition est : {result}</p>
        </div>
    )
}

export default AddNumbers