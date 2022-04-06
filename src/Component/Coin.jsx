import React from "react";
import { Link } from "react-router-dom";

export default function Coin({coin}) {
  return (
  <Link to='/coindetail'>
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
          <img src={coin.image} alt="" className="coinlist-image" />
         <span className="text-decoration-none">{coin.current_price}</span>
          <span className="text-success mr-2">
              <i className=" fa-sort-down align-middle mr-1"></i>
              {coin.price}
              </span>
              <i className="delete-icon fa-times-circle text-danger"></i>
          </li>
      </Link>
  )
}
/*

import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import data from './data.json';
import DataItem from './data-item';
import Modal from './modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(data);
  const [currentUser, setCurrentUser] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const addUser = user => {
    if (currentUser) {
      setUserData(userData.map(data => (data.id === user.id ? user : data)));
      setCurrentUser(null);
      return;
    }
    user.id = userData.length + 1;
    setUserData([...userData, user]);
  }

  const editUserHandler = user => {
    setCurrentUser(user);
    toggleModal();
  }

  const deleteUser = user => {
    setUserData(userData.filter(item => item.name !== user.name));
  }

  return (
    <div>
      <div className="header">
        <span className="title">Simple CRUD app</span>
        <button onClick={toggleModal}>Add new</button>
      </div>
      <DataItem data={userData} onEdit={editUserHandler} onDelete={deleteUser} />
      <Modal onCancel={toggleModal} onSubmit={addUser} show={showModal} data={userData} editUser={currentUser} />
    </div>
  )
}

render(<App />, document.getElementById('root'));

*/