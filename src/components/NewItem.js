import React, {useState} from "react";

function NewItem({onItemSubmit}){
    const [formData, setFormData] = useState({
        description: '',
        location: '',
        image: ''
    })

    function handleChange(e){
        console.log(e.target.value)
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const newObj = {...formData}

        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
        .then(res => res.json())
        .then(() => onItemSubmit())

        clearForm()
    }

    function clearForm(){
        const clearObj = {
            description: '',
            location: '',
            image: ''
        }
        setFormData(clearObj)
    }

    return(
        <form onSubmit={handleSubmit} className="searchbar">
            <input id="description" onChange={handleChange} type="text" placeholder="Description" name="description" value={formData.description} />
            <input id="location" onChange={handleChange} type="text" placeholder="Location" name="location" value={formData.location} />
            <input id="image" onChange={handleChange} type="text" placeholder="Image" name="image" value={formData.image} />
            <input type="submit" />
        </form>
    )
}

export default NewItem