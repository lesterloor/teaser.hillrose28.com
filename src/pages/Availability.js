import React, { Component } from 'react'
import $ from 'jquery';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import "../styles/pages/residences.scss"
console.log("window.location.href ", window.location.href)
class HomePage extends Component {
    constructor() {
        super()
        this.state = {


        }
        componentDidMount = () => {
            $("#nav-wrapper").addClass("white-nav")
        }


        render() {
            const { buildingImageHeight, bathRoomScrollPosition, loaded, firstRow, secondRow, thirdSectionImage, mainContent, buildingContainer } = this.state
            return (
                <React.Fragment>
                    <div className="availability-page">
                        form
                </div>

                </React.Fragment >
            )
        }
    }

    const mapStateToProps = state => ({

    })

    const mapDispatchToProps = dispatch => bindActionCreators({
    }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(HomePage)