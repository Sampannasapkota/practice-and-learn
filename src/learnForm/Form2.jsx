import React, { useState } from 'react'

const Form2 = () => {
    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [age, setAge] = useState("");




    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: name,
            email: email,
            surname: surname,
            password: password,
            age: age

        }
        console.log(data)

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" placeholder='Enter your name' onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="">Surname:</label>
                    <input type="text" placeholder='Enter your surname' onChange={(e) => { setSurname(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" placeholder='Enter your email' onChange={(e) => { setEmail(e.target.value) }}/>
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder='Enter password' onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="">Gender:</label>
                    <select name="" id="">
                        <option value="">Male</option>
                        <option value="">Female</option>
                        <option value="">Non-binary</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Age:</label>
                    <input type="number" placeholder='Enter age' onChange={(e) => { setAge(e.target.value) }}/>
                </div>

                <div>
                    <button>Create</button>
                </div>
            </form>

        </div>
    )
}

export default Form2