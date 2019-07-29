import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Context from '../Context'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainAppContainer from '../containers/MainAppContainer'
import HomePage from '../pages/HomePage'
class Routing extends Component {
    static contextType = Context
    render() {
        return (
            <Router onUpdate={() => console.log("updated")}>
                <Switch>
                    <MainAppContainer>
                        <Route path="/" component={HomePage} />

                        {/* <Route redirect={() => <Redirect to="/" />} /> */}
                    </MainAppContainer>
                </Switch>
            </Router>
        )
    }
}
const mapStateToProps = state => ({
    register: state.register
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Routing)