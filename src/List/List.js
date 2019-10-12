import React from 'react'
import ListItem from '../ListItem/ListItem'

const List = props => (
    <ul className="list">
        {props.state.map((val, index) => {
            return (
                <ListItem 
                    key={index}
                    stateList={val}
                    deleteListItem={props.deleteListItem}
                />
            )
        })}
    </ul>
)

export default List