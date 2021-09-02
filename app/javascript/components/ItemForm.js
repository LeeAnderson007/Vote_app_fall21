import React, { useState} from "react";

const ItemForm = (props) => {
    const [name, setName] = useState(props.name ? props.name : "");

    const handleSubmite = (e) => {
        e.preventDefault();
        props.addItemProp({ name });
        setName("");  //this clears it out
        //console.log(name);
    }
    return (
        <div style={{margin: "10px", border: "3px soild pink"}}>
            <h1>Item Form</h1>
            <form onSubmit={handleSubmit}>
                <p>name</p>
                <input 
                value={name}
                onClick={(e) => {
                    setName(e.target.value);
                }}
                />
                <button>{props.id ? "update" : "add"}</button>
            </form>
        </div>
    );
};

export default ItemForm;