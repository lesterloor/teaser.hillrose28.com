import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Context from '../Context'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainAppContainer from '../containers/MainAppContainer'
import HomePage from '../pages/HomePage'
// import LoginPage from '../pages/LoginPage'

class Routing extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    static contextType = Context
    render() {
        /*const isLoggedIn = this.props.routing.loginReducer.user ? true : false
        if (!isLoggedIn) {
            return (
                <Router>
                    <Route exact path="/" component={LoginPage} />
                </Router>
            )
        }*/
        return (
            <Router>
                <Switch>
                    <MainAppContainer>
                        <Route exact path="/" component={HomePage} />

                        {/* <Route redirect={() => <Redirect to="/" />} /> */}
                    </MainAppContainer>
                </Switch>
            </Router>
        )
    }
}
const mapStateToProps = state => ({
    routing: state
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Routing)
