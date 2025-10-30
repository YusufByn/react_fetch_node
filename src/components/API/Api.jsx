import { useState, useEffect } from 'react'
import './Api.css'

function Api() {
    const [data, setData] = useState([])

    //on utilise un useEffect pour récupérer les data et les stocker dans ma variable d'état   
    useEffect(() => {
        // on déclare une fonction async pour récupérer les data
        const fetchData = async () => {
            // on fetch les data en utilisant l'url de l'api
            const response = await fetch('http://localhost:3000/tableau')
            // transforme la réponse en json
            const data = await response.json()
            //on set les données de la variable d'état avec les données de la réponse
            // quand on fait un console log de data on a la key data qui contient le tableau avec mes data 
            // donc on setData avec data.data
            setData(data.data)
        }

        fetchData()
    }, [])
    
    // console.log('data:', data);
    // console.log('data normalement', data.data);
    
    return (
      <>   
        <h1>Tableau de données</h1>
        <div className="api-container">
            {data.map((data) => (
                <div key={data.id} className="api-box">
                    <p>Prénom: {data.name}</p>
                    <p>Nom: {data.lastname}</p>
                    <p>Âge: {data.age}</p>
                </div>
            ))}
        </div>
      </>
    )
}

export default Api  