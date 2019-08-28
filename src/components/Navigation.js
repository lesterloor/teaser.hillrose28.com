import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Logo from "../assets/images/SVG/logo.svg"
import ReactSVG from 'react-svg'
import Plx from 'react-plx';
import { isMobile, isTablet } from 'react-device-detect';
import "../styles/layout/navigation.scss"
class HomeNavigation extends Component {
    constructor() {
        super()
        this.state = {
            menuOpened: false
        }
    }

    componentDidMount = () => {
        console.log("this.props", this.props)

    }

    render() {
        console.log("this.props", this.props)
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
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigation)