import React from 'react';
import './pagination.scss'


const Pagination = ({dataPerPage, totalData, paginate, toggleIcon}) => {
const pageNumber = [];

for(let i = 1; i <= Math.ceil(totalData / dataPerPage); i++){
  pageNumber.push(i);
}



return(
  <nav>
    <ul className="pagination">
      {pageNumber.map(number => (
        <li key={number} className='page-item'>
          <a onClick={(e) => {
            e.preventDefault()
paginate(number)
          }} className='page-link' href="/">
          <img className='test' onClick={toggleIcon.bind(this)}  src="https://a.icons8.com/ajnYsMeU/8KAT7R/oval.png" alt=""/>
          </a>
        </li>
      ))}
    </ul>
  </nav>
)
}

export default Pagination;