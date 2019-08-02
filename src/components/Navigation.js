import React, { Component } from 'react'
import White_logo from "../assets/images/Hillrose_logo-white.png"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Logo from "../assets/images/SVG/logo.svg"
import ReactSVG from 'react-svg'
import Plx from 'react-plx';
import $ from 'jquery';
import { isMobile, isTablet } from 'react-device-detect';


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
            <div className="navigation">
                < Plx
                    style={{ opacity: 0 }}
                    onPlxEnd={this.fadeHeader}
                    parallaxData={[{
                        start: isMobile ? 0 : 750,
                        duration: 200,
                        properties: [{
                            startValue: 0,
                            endValue: 1,
                            property: "opacity"
                        }]
                    }]} >
                    <div className="grey-nav"></div>
                </ Plx>
                <ReactSVG className="logo-svg" src={Logo} />
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