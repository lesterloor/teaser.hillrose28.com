import React, { Component } from 'react'
import White_logo from "../assets/images/Hillrose_logo-white.png"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Logo from "../assets/images/SVG/logo.svg"
import ReactSVG from 'react-svg'
import Plx from 'react-plx';
import $ from 'jquery';

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
    toggleLogo = () => {
        console.log("changinf")
        // $(".cls-2").addClass("logo-red");
        // $(".cls-1").addClass("logo-white");

    }
    render() {

        return (
            <div id="nav-wrapper" className="white-nav">

                <div className="nav-item-container">
                    <div id="logo-container">
                        <div className="logo-text">
                            {/* <ReactSVG className="logo-svg" src={Logo1} /> */}
                            < Plx
                                onPlxEnd={() => this.toggleLogo()}
                                parallaxData={[{
                                    start: 0,
                                    duration: 400,
                                    properties: [{
                                        startValue: 1,
                                        endValue: 0,
                                        property: "opacity"
                                    }]
                                }]} >
                                <div />
                            </ Plx>
                            < Plx
                                // onPlxEnd={() => this.toggleLogo()}
                                parallaxData={[{
                                    start: 600,
                                    duration: 400,
                                    properties: [{
                                        startValue: 1,
                                        endValue: 0,
                                        property: "opacity"
                                    }]
                                }]} >
                                <ReactSVG className="logo-svg" src={Logo} />
                            </ Plx>


                            {/* <img className="nav-logo-image" alt=" " src={Logo} /> */}
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