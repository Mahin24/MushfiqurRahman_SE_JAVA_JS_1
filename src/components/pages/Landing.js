import React, { Component } from 'react'

export default class Landing extends Component {
    componentDidMount() {
        window.location = "/auth/login";
    }
    render() {
        return (
            <div>
                Landing
            </div>
        )
    }
}
