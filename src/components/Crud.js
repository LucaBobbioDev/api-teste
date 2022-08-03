import { useState } from "react";
import api from "../services/api";
import './Crud.css'

export default function Crud (){
    const [photos, setPhotos] = useState([]);

    async function getPhotos(e){
        e.preventDefault();
        const response = await api.get('');
        setPhotos(response.data);
    }

    return(
        <div>
            <p><b>Método GET</b></p>
            <div>
                <button onClick={getPhotos}>Mostrar Dados</button>
                <ul>
                    {photos.map(photo =>{
                        return(
                            <li key={photo.id}>
                                <b>{photo.id}</b> <br></br>
                                <img src={photo.url}></img>
                                <p>{photo.title}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}