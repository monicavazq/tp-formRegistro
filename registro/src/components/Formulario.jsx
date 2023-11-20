import { useState } from "react"
import './formulario.css'

const Formulario = () => {

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = (event) => {
        console.log('handleSubmit', form)
        event.preventDefault()
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        // console.log("handleChange", name, value)
        setForm({ ...form, [name]: value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" name="nombre" value={form.nombre} onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" className="form-control" name="apellido" value={form.apellido} onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input type="text" className="form-control" name="telefono" value={form.telefono} onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange}></input>
            </div> <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Password</label>
                <input type="password" className="form-control" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}></input>
            </div>
            <button type="submit" className="btn btn-primary">Registrarse</button>
        </form>
    )
}

export default Formulario