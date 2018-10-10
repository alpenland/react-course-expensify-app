// Higher order component (HOC) - a component that renders another component
//Goal is to: reuse code
//benefits:
//Render hijacking
// Prop manipulation
//abstract sate


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p> the info is {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>this is private info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComp) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComp {...props}/> : <p>Please login to view.</p> }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='details' />, document.getElementById('app'));