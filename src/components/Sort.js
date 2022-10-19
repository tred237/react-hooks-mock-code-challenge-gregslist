import React, {useState} from "react";

function Sort({ listings, onSort }){
    const [ascending, setAscending] = useState(true)

    function handleSortClick() {
        const newListings = [...listings]
        if(ascending){
            sortArray(newListings, -1 , 1)
            setAscending(!ascending)
        } else {
            sortArray(newListings, 1 , -1)
            setAscending(!ascending)
        }
        onSort(newListings)
    }

    function sortArray(arr, num1, num2){
        arr.sort((a,b) => {
            const locationA = a.location.toLowerCase()
            const locationB = b.location.toLowerCase()
            if(locationA < locationB) return num1
            if(locationA > locationB) return num2
            return 0
        })
    }

    return (
        <>
        <button onClick={handleSortClick}>Sort</button>
        </>
    )
}

export default Sort