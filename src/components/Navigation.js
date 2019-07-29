import React, { Component } from 'react'
import White_logo from "../assets/images/Hillrose_logo-white.png"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import $ from 'jquery';
// import logo from "../assets/images//Hillrose_logo_white.png"
import "../styles/layout/navigation.scss"
class HomeNavigation extends Component {
    constructor() {
        super()
        this.state = {
            menuOpened: false
        }
    }
    toggleMenu = () => {
        // var isOpened = $("#burger-2").hasClass("clicked")
        // isOpened ? helpers.fadeOutNav() : helpers.fadeInNav()
    }
    componentDidMount = () => {

    }
    render() {

        return (
            <div id="nav-wrapper" className="white-nav">

                <div className="nav-item-container">
                    <div id="logo-container">
                        <div className="logo-text">
                            <img className="nav-logo-image" alt="" src={White_logo} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => bindActionCreators({
    // toggleGlobalSidebar
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigation)