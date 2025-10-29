import { useState } from 'react'
import './PairOrNot.css'

function PairOrNot() {
    // on declare une variable d'état pour le nombre
    const [number, setNumber] = useState(0)
    // on declare une variable d'état pour le résultat
    const [result, setResult] = useState('')
    // on crée une fonction pour vérifier si le nombre est pair ou impair
    const handleCheck = async () => {

        // on declare une variable pour envoyer les données au backend
        const table = {number: number}
        // on fetch les données en utilisant l'url de l'api
        const reponse = await fetch('http://localhost:3000/pairOrNot', {
            // on utilise la méthode POST pour envoyer les données
            method: 'POST',
            // on utilise le header Content-Type pour spécifier que les données sont en json
            headers: {
                // on utilise le header Content-Type pour spécifier que les données sont en json
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