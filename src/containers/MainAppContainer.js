import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainApp from '../components/MainApp'
class DashboardContainer extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <MainApp>
                {this.props.children}
            </MainApp>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)