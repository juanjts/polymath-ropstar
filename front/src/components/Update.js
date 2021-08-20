import React, {Fragment, useState, useEffect} from 'react'
import api from '../axiosApp'

const Update = ({toEdit, setToEdit}) => {
    const [showData, setShowData] = useState([])

    const [dataEdit, setDataEdit] = useState({
        id: '',
        name: '',
        desc: '',
        address: '',
        city: '',
        imagUrl: ''
    })
    const handleInpunChange = (event) => {
        setDataEdit({
            ...dataEdit,
            [event.target.name] : event.target.value
        })
    }
    async function updateRest(dataEdit) {
        if(!dataEdit) return alert("debe completar el formulario")
        try{
            const response = await api.put(`/restaurants/${toEdit}`, dataEdit)
            if (response) {
                alert('Restaurante se actualizó exitosamente')
            }
          }catch(error){
            throw error;
          }
    }
    const sendData = (event) => {
        event.preventDefault();
        updateRest(dataEdit);
        setToEdit("")
    }
    async function getDatabyId(toEdit){
        try {
            const data = await api.get(`/restaurants/${toEdit}`)
            return data.data
        } catch (error) {
            throw error
        }
    }
    useEffect(() => {
        try {
            async function fetchData() {
                const data = await getDatabyId(toEdit);
                setShowData(data)
            }
            fetchData();
        } catch (error) {
            throw error
        }
    })
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
                    defaultValue={showData.name}
                ></input>
                <br/>
                <label>Descripción</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Descripción del restaurante"
                    name="desc"
                    onChange={handleInpunChange}
                    defaultValue={showData.desc}
                ></input>
                <br/>
                <label>Dirección</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Dirección del restaurante"
                    name="address"
                    onChange={handleInpunChange}
                    defaultValue={showData.address}
                ></input>
                <br/>
                <label>Ciudad</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ciudad del restaurante"
                    name="city"
                    onChange={handleInpunChange}
                    defaultValue={showData.city}
                ></input>
                <br/>
                <label>URL</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="URL de imagen"
                    name="imagUrl"
                    onChange={handleInpunChange}
                    defaultValue={showData.imagUrl}
                ></input>
                <br/>
                <div className="d-flex flex-row justify-content-center alig-items-center">
                    <button className="btn btn-dark w-50" type="submit">Actualizar</button>
                </div>
            </form>
        </Fragment>
    )
}

export default Update
