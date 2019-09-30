import React, { useState} from 'react';
// import axios from 'axios';
import './clients.scss'
import ClientsData from './ClientsData';
import Pagination from '../Pagination/Pagination';

const Clients = () => {
    const [data] = useState([
        // {_id: "5d30c0641c9d440000702354", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d441000070231312", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d4240000702d33232", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d4a24000070235312", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c06451c9d4400007021", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d44000074", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d4430000444", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d4400z00702333", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d4400v0070235433", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d440xa00070235422", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d44000070235411", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d44100007023541010", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d4240000702d354ddd", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d4a240000702354123", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c06451c9d4400007023541111", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d440000702354ggg", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d4430000702354bbb", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        // {_id: "5d30c0641c9d4400z00702354cc", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},
        {_id: "5d30c0641c9d4400v007023543333", name: './envite.png'},
        {_id: "5d30c0641c9d4400v00702354333", name: './newrow.png'},
        {_id: "5d30c0641c9d4400v0070235433", name: './paylix.jpg'},
        {_id: "5d30c0641c9d4400v007023543", name: './365.jpg'},
        {_id: "5d30c0641c9d4400v00702354333332", name: './shopiqa.jpg'},
    


        // {_id: "5d30c0641c9d440xa0007023541212", name: 'https://a.icons8.com/gTpfdSef/XXh6tQ/bitmap.png'},

    ]);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);



    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         const res = await axios.get('http://localhost:3001/api/getClients')
    //         setData(res.data.data);
    //         setLoading(false);
    //     }

    //     fetchData();

    // }, [])
    //Get current data
    const indexOfLastClient = currentPage * dataPerPage;
    const indexOfFirstClient = indexOfLastClient - dataPerPage;
    const currentClient = data.slice(indexOfFirstClient, indexOfLastClient);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const toggleIcon = (e) => { let elements = document.getElementsByClassName('test2'); for (let i = 0; i < elements.length; i++) { elements[i].className = 'test' }; e.target.className = 'test2' }


    return (
        <div className='clients-wrapper' id="client">
            <div className='clients-container'>
                <div className="clients-header">
                    <span>Representive Clients</span>
                </div>
                <ClientsData data={currentClient} />
                <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={paginate} toggleIcon={toggleIcon} />
            </div>

            {/* <div className='clients-container'>
                <div className="clients-header">
                   <span>Representive Clients</span>
               </div>
                    <div className="clients-list">
                        {currentClient.map((item, i) => (
                            <div className='client-container' key={i}>
                                {item.name}
                            </div>
                        ))}
                    </div>
            </div> */}
        </div>
    )
}
// class Clients extends React.Component {
//     state = {
//         data: []
//     }

//     async componentDidMount() {
//         try {
//             const res = await fetch('http://localhost:3001/api/getClients')
//             if (!res.ok) {
//                 throw Error(res.statusText);
//             }
//             const json = await res.json();
//             this.setState({ data: json.data })
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     render() {
//         return (
//             <div className='clients-container'>
//                 <div className="clients-header">
//                     <span>Representive Clients</span>
//                 </div>
//                 {this.state.data.length > 0 ?

//                     <div className="clients-list">


//                         {this.state.data.map((item, i) => (
//                             <div className='client-container' key={i}>
//                                 {item.name}
//                             </div>
//                         ))}



//                     </div>

//                     : <div></div>

//                 }
//             </div>
//         )
//     }
// }


export default Clients;

