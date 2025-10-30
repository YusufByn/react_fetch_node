import { useState } from 'react'
import './CountLength.css'

function CountLength() {
    const [text, setText] = useState('')
    const [result, setResult] = useState(0)

    const handleCount = async () => {
        // dans notre endpoint express, on declare une const Text qui est egal a req.body.str
        // donc dans la table j'appelle str et je lui donne la valeur de text
        // si je mettais text: text ca ne marcherait pas
        const table = {str: text}
        // declare reponse qui egale au fetch de l'url de l'api ici c'est countLength
        const reponse = await fetch('http://localhost:3000/countLength', {
            // on utilise la methode POST pour envoyer les données
            method: 'POST',
            // on utilise le header Content-Type pour specifier que les données sont en json
            headers: {
                'Content-Type': 'application/json'
            },
            // on utilise le body pour envoyer les données en json
            body: JSON.stringify(table)
        })
        // on transforme la reponse en json
        const result = await reponse.json()
        // on set le resultat dans la variable d'etat result
        setResult(result.message)
        
    }

    return (
        <div className="count-length-container">
            <h1>Compter la longueur d'un texte</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Entrez un texte" />
            <button onClick={handleCount}>Compter</button>
            <p>{result}</p>
        </div>
    )
}

export default CountLength