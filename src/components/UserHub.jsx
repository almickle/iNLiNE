import React, {useState, useEffect} from "react";

// component imports
import UserCard from "./UserCard";

// stylesheet imports
import "./style/userhub.css"


// component function
function UserHub() {

    const [userItems, setUserItems] = useState([{id: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeN4Iq19KP8WFQuLT7Xt8GVWG98MFQInyD0A&usqp=CAU"}])

    useEffect(() => {
      fetch("http://localhost:3000/user")
      .then(resp => resp.json())
      .then(data => setUserItems(data))
    }, [])
    

    const userElements = userItems.map((user) => {   
        return(
            <UserCard key={user.id} image={user.image} />
            )
    })

    return (
        <div id="user-hub">
            {userElements}
        </div>
    )
}

export default UserHub