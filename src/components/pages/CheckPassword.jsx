import { useState } from 'react'


function CheckPassword() {
    // on declare une variable d'état pour le premier mot de passe
    const [password, setPassword] = useState('')
    // on declare une variable d'état pour le deuxième mot de passe
    const [password2, setPassword2] = useState('')
    // on declare une variable d'état pour le résultat
    const [result, setResult] = useState('')

    // on crée une fonction pour vérifier si les deux mots de passe sont identiques
    const handleCheck = async (e) => {

        e.preventDefault()
        // on declare une variable pour envoyer les données au backend
        const table = {firstPassword: password, secondPassword: password2}
        // on fetch les données en utilisant l'url de l'api
        const reponse = await fetch('http://localhost:3000/CheckPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(table)
        })
        // on transforme la réponse en json
        const result = await reponse.json()
        // on set le résultat dans la variable d'état result
        setResult(result.message)
    }

    return (    
        // on crée un composant pour vérifier le mot de passe
        <div className="check-password-container">
            {/* // on crée un titre pour le composant */}
            <h1>Vérifier le mot de passe</h1>
            {/* // on crée un formulaire pour vérifier le mot de passe */}
            <form onSubmit={handleCheck}>
                {/* // on crée un input pour le premier mot de passe */}
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Entrez le mot de passe" />
                {/* // on crée un input pour le deuxième mot de passe */}
                <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Entrez le mot de passe encore une fois" />
                {/* // on crée un bouton pour vérifier le mot de passe */}
                <button type="submit">Vérifier</button>
                {/* // on affiche le résultat */}
            </form>
            {/* // on affiche le résultat */}
            <p>{result}</p>
        </div>
    )
}
export default CheckPassword