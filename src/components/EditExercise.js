import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const EditExercises = () => {
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [user, setUser] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/exercises/${id}`)
             .then(response => {
                setUsername(response.data.username);
                setDescription(response.data.description);
                setDuration(response.data.duration);
                setDate(new Date(response.data.date));
             })
             .catch(error => {
                console.log(error);
             });

        axios.get("http://localhost:5000/users/")
             .then(response => {
                if (response.data.length > 0) {
                    setUser(response.data.map(user => user.username));
                }
             });
    }, [id]);

    const onChangeUsername = e => {
        setUsername(e.target.value);
    };

    const onChangeDescription = e => {
        setDescription(e.target.value);
    };

    const onChangeDuration = e => {
        setDuration(e.target.value);
    };

    const onChangeDate = date => {
        setDate(date);
    };

    const onSubmit = e => {
        e.preventDefault();

        const exercise = {
            username,
            description,
            duration,
            date
        };

        console.log(exercise);

        axios
            .post(`http://localhost:5000/exercises/update/${id}`, exercise)
            .then(res => console.log(res.data));

        window.location = "/";
    };
    return (
      <div>
        <h1>Modifier l'exercice</h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Nom d'utilisateur</label>
                <select 
                    required 
                    className="form-control" 
                    value={username} 
                    onChange={onChangeUsername}>
                    {
                        user.map(user => {
                            return <option key={user}>{user}</option>
                        })
                    }


                </select>
            </div>
            <div className="form-group">
                <label>Description</label>
                <input 
                    type="text" 
                    required
                    className='form-control'
                    value={description}
                    onChange={onChangeDescription}
                />
            </div>
            <div className="form-group">
                <label>Durée en minutes</label>
                <input 
                 type="number"
                 required
                 className='form-control'
                 value={duration}
                 onChange={onChangeDuration}
                 />
            </div>
            <div className="form-group">
                <label>Date :</label>
                <div>
                    <DatePicker
                        selected={date}
                        onChange={onChangeDate}
                    />
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Modifier</button>
            </div>
        </form>
      </div>
    )
  }

  export default EditExercises;
