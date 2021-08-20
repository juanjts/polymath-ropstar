import React, {useState, useEffect} from 'react'
import api from '../axiosApp'
import {Link} from "react-router-dom";

const List = ({toEdit, setToEdit}) => {
    const [data, setData] = useState([])

    async function getData(){
        try {
            const data = await api.get('/restaurants')
            return data.data
        } catch (error) {
            throw error
        }
    }
    async function toDelete(id){
        try {
            const deleted = await api.delete(`/restaurants/${id}`)
            if (deleted) {
                alert('El restaurante con el id: ' + id + ' fué eliminado exitosamente')
            }
        } catch (error) {
            throw error
        }
    }
    async function edit(id){
        try {
            setToEdit(id)
            if(toEdit === id){
                console.log(toEdit);
            }
        } catch (error) {
            throw error
        }
    }
    useEffect(() => {
        try {
            async function fetchData() {
                const data = await getData();
                setData(data);
            }
            fetchData();
        } catch (error) {
            throw error
        }
    }, [])
    return (
        <div className="container">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Dirección</th>
                        <th>Ciudad</th>
                        <th>imagen</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item =>{
                            return <tr key={item}>
                                <td>{item.name}</td>
                                <td>{item.desc}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.imagUrl}</td>
                                <td>
                                    <Link to="/update">
                                        <button onClick={async () => await edit(item.id)}>
                                            <img src="https://img.icons8.com/fluency/48/000000/edit.png" alt="editar"/>
                                        </button>
                                    </Link>
                                    
                                    <button onClick={() => toDelete(item.id)}>
                                        <img src="https://img.icons8.com/fluency/48/000000/delete-sign.png" alt="eliminar"/>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List
