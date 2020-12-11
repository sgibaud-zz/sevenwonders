import React, { Component } from 'react';

// get our fontawesome imports
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './card.css';


class Card extends Component {

    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }


    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }



    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        };

        return (
            <section>
                <div className="divCard">
                    <Star isLoggedIn={isLoggedIn} />
                    <img className='image' src={this.props.img} alt='' />
                    <article>
                        <h3>{this.props.name}</h3>
                        <p className='location'>{this.props.location}</p>
                        <p className='year'>{this.props.year}</p>
                    </article>
                    {button}
                </div>
            </section >
        );
    }
}

function UserStar(props) {
    return <div className='status-valid'><FontAwesomeIcon icon={faStar} /></div>;
}

function NoStar(props) {
    return <div></div>;
}

function Star(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserStar />;
    }
    return <NoStar />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Click me!
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Click me!
        </button>
    );
}


export default Card;