import React, {useState} from 'react';
import Axios from "axios";

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });
    console.log(newSmurf);

    const handleSubmit = e => {
        e.preventDefault();
        Axios
        .post("http://localhost:3333/smurfs")
        .then(res => {
            setNewSmurf({
                name: "",
                age: "",
                height: ""
            })
        })
        e.addSmurf(newSmurf);
    };

    const handleChanges = e  => {
        console.log("changes");
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" onChange={handleChanges} value={newSmurf.name} />
                <input type="text" name="age" placeholder="age" onChange={handleChanges} value={newSmurf.age} />
                <input type="text" name="height" placeholder="height" onChange={handleChanges} value={newSmurf.height} />
                <button type="submit">Smurf</button>
            </form>
        </div>
    )
}

export default SmurfForm;