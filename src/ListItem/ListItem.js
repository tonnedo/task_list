import React from 'react'

const ListItem = props => {
    console.log(props.key)
    return (
        <li
            className="flex">
            
            {props.stateList}

            <span
                onClick={() => props.deleteListItem(props.key)}
            >x</span>
        </li>
    )
}

export default ListItem