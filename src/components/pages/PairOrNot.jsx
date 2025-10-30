import { useState } from 'react'

function PairOrNot() {
    // on declare une variable d'état pour le nombre
    const [number, setNumber] = useState(0)
    // on declare une variable d'état pour le résultat
    const [result, setResult] = useState('')
    // on crée une fonction pour vérifier si le nombre est pair ou impair
    const handleCheck = async (e) => {
        // on utilise la fonction preventDefault pour éviter que le formulaire soit envoyé
        e.preventDefault()

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
            {/* on crée un titre pour le composant */}
            <h1>Pair ou Impair</h1>
            {/* on crée un formulaire pour vérifier si le nombre est pair ou impair */}
            <form onSubmit={handleCheck}>  
                {/* on crée un input pour entrer le nombre */}
                <input type="number" placeholder="Entrez un nombre" 
                value={number} onChange={(e) => setNumber(e.target.value)} />
                {/* on crée un bouton pour vérifier si le nombre est pair ou impair */}
                <button type="submit">Vérifier</button>
            </form>
            {/* on affiche le résultat */}
            <p>{result}</p>
        </div>
    )
}

export default PairOrNot