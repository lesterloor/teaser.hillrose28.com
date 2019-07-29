import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testAction } from "../state/actions/TestAction"
import App from "../components/App.js"
class AppContainer extends Component {
    testReducer = () => {
        console.log("testing")
        this.props.testAction("lester")
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <App />
            </div>)
    }
}


const mapStateToProps = state => ({ state: state.testReducer })
const getDispatchToProps = dispatch => bindActionCreators({ testAction }, dispatch)
export default connect(mapStateToProps, getDispatchToProps)(AppContainer)