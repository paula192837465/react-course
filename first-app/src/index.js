import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './singleComment';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className="ui comments">
            <UserCard>
                Hi, my name is Sarah and I live in San Francisco
            </UserCard>
            <UserCard>
                <SingleComment name="Alex" date="Today at 6:00PM" text="It's amazing"></SingleComment>
            </UserCard>
            <UserCard>
                <SingleComment name="Rudy" date="Today at 5:00PM" text="Thanks!"></SingleComment>
            </UserCard>
            <UserCard>
                <SingleComment name="Sanah" date="Yesterday at 5:00PM" text="It's cool"></SingleComment>
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)