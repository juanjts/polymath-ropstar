import React, { Fragment, useState} from 'react'
import api from '../axiosApp.js'

const Create = () => {
    const [toSend, setToSend] = useState({
        id: '',
        name: '',
        desc: '',
        address: '',
        city: '',
        imagUrl: ''
    })
    const handleInpunChange = (event) => {
        setToSend({
            ...toSend,
            [event.target.name] : event.target.value
        })
    }
    async function createRest(toSend) {
        if(!toSend) return alert("debe completar el formulario")
        try{
            const response = await api.post('/restaurants', toSend)
            if (response) {
                alert('Restaurante se creó exitosamente')
            }
          }catch(error){
            throw error;
          }
    }
    const sendData = (event) => {
        event.preventDefault();
        createRest(toSend);
    }
    return (
        <Fragment>
            <form className="form-group" onSubmit={sendData}>
                <label>Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del restaurante"
                    name="name"
                    onChange={handleInpunChange}
                ></input>
                <br/>
                <label>Descripción</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Descripción del restaurante"
                    name="desc"
                    onChange={handleInpunChange}
                ></input>
                <br/>
                <label>Dirección</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Dirección del restaurante"
                    name="address"
                    onChange={handleInpunChange}
                ></input>
                <br/>
                <label>Ciudad</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ciudad del restaurante"
                    name="city"
                    onChange={handleInpunChange}
                ></input>
                <br/>
                <label>URL</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="URL de imagen"
                    name="imagUrl"
                    onChange={handleInpunChange}
                ></input>
                <br/>
                <div className="d-flex flex-row justify-content-center alig-items-center">
                    <button className="btn btn-dark w-50" type="submit">Crear</button>
                </div>
            </form>
        </Fragment>
    )
}

export default Create
