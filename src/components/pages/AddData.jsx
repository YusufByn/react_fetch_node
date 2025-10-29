import { useState, useEffect } from 'react'

function AddData() {
    const [responseData, setResponseData] = useState("pas encore d'informations");

    // on crée une fonction pour ajouter des données
    const handleSend = async () => {

        const dataToSend = {
            name: 'John',
            lastname: 'Doe',
            age: 20
        }


        // on fetch les données en utilisant l'url de l'api
        try {
            const response = await fetch('http://localhost:3000/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            })
            const responseData = await response.json()
            setResponseData(responseData.data)
        } catch (error) {
            console.log(error)
            setResponseData("erreur lors de l'envoi des données")
        }
    }

    return (
        <>
            <h1>Add Data</h1>
            <button onClick={handleSend}>Envoyer les données</button>
            {responseData && 
            <pre>{JSON.stringify(responseData)}</pre>}
        </>
    )
}

export default AddData