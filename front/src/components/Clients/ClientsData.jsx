import React from 'react';

const ClientsData = ({data}) =>{
    return (
        <div className='clients-list'>
            {data.map(client => (
                <div className="client-container"
                key={client._id}>
                    <img src={require( "" + client.name )}  alt=""/>
                </div>
            ))}
        </div>
    )
}

export default ClientsData;