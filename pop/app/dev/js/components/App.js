//Bundles containers
import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';



const App = () => (
    <div>
    	<h1>The Pop Workforce</h1>
        <h3>Find out more...</h3>
        <UserList />
        <hr />
        <UserDetails />
    </div>
);

export default App;
