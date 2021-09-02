import axios from "axios";
import React , { useState } from "react";
import ItemForm from "./ItemForm";
import Items from "./Items";

const App = () => {
    const [items, setItems] = useState([]);
    const [showForm, setShowForm] = useState([]);
    // const [loading, setLoading] = useState(false);
    const getItems = async ()=>{
    //  setLoading(true);
         // does this chucnk of code and if it fails, it goes to catch block
        try{
            //res is short for response
            //get json from our rails server
            let res = await axios.get("/Items");
            // console.log(res);
            // console.log(res.data);
            setItems(res.data);
            // setLoading(false);
        }catch(err){}
            // setLoading(false);
    };  
    const deleteItem = (id) => {
        try {
            // delete from database
            await axios.delete(`/items/${id}`);
            //remove from ui
            const newItems = items.filter((i) => i.id !== id);  
        setItems(newItems);
        } catch (err) {
            alert("failed to delete");
            console.log(err);
        }
    }

    const addItem = (item) => {
        console.log(item);
        try {
            // add to database
        let res = await axios.post("/items", item)
        console.log(res);
            // if successfull add to state
            setItems([res.data,...items]);
        } catch (err) {
            alert("failed to create");
            console.log(err);
            //debugger;
        }
    }
    return (
     <div style={{margin: "10px", border: "3px solid black"}}>
        <h1>App</h1>
        <button onClick={() => showForm(!showForm)}>
        {showForm ? "hide form" : "new item form"}
        </button>
        {showForm && <ItemForm  addItemProp={!showForm} />}
        <button onClick={getItems}>get Items</button>
        {/* {items.length} */}
        {/* {loading ? "Loading" : "Not Loading"} */}
        <Items  items={items} deleteItem={deleteItem} />
     </div>
    );

};

export default App;