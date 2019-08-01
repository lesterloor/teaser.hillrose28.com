import React, { Component } from 'react'
import $ from 'jquery';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Waypoint } from 'react-waypoint';
import Images from "../components/BuildingFrames"
import { Form, Input, Radio, Button, Row, Col } from 'antd';
import { isMobile, isTablet } from 'react-device-detect';
import White_logo from "../assets/images/Hillrose_logo-white.png"
import Red_logo from "../assets/images/Hillrose_logo-red.png"
import Corcoran from "../assets/images/corcoran-logo.png"
import Plx from 'react-plx';
import "../styles/pages/home.scss"
import "../styles/contact.scss"
import { contactForm, contactFormReset } from "../state/actions/EmailAction"

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            loaded: false,
            buildingImageHeight: 1,
            buildingContainer: 1,
            contactContainer: 1,
            contactCotainerHeight: 1,
            thirdSectionImage: 1,
            mainContent: 1,
            secondRow: 1,
            firstRow: 1,
            End: [],
            Start: [],
            display: false,
            error: null,
            submitting: false,
            sent: false
        }
    }

    componentDidMount = () => {

        $(window).resize(() => {
            const buildingImageHeight = $(".buildingImageHeight").height()
            const contactContainer = $(".contactContainer").height()
            this.setState({
                buildingImageHeight,
                contactContainer,
            })
        });
        $("#nav-wrapper").removeClass("white-nav")
        var frameNumber = 0,
            // start video at frame 0
            // lower numbers = faster playback
            playSpeed = isMobile ? 15 : isTablet ? 75 : 80,
            imageRange = 1,
            totalImages = 31,
            imgSeq = document.querySelector('.img-seq'),
            i,
            images = [],
            imgName = `${Images.image}`,
            runVideo,
            holdVal,
            scrollEvent = function (e) {
                var pageY = window.pageYOffset;

                if (holdVal === pageY) {
                    window.cancelAnimationFrame(runVideo);
                } else {
                    runVideo = window.requestAnimationFrame(scrollPlay);
                }
            };

        for (i = 0; i <= totalImages;) {
            var filename = imgName,
                img = new Image();

            if (i < 10) {
                filename += '000';
            } else if (i < 20) {
                filename += '00';
            } else if (i < 1000) {
                filename += '0';
            }

            filename += i + '.jpg';
            img.src = Images[i];
            images.push(img);
            i = i + imageRange;
        }

        window.addEventListener('scroll', scrollEvent);

        function scrollPlay() {

            var frameNumber = Math.floor(window.pageYOffset / playSpeed);

            if (frameNumber > 28) {
                console.log("frameNumber ", frameNumber)

            } else {
                console.log("frameNumber ", frameNumber)

                $(".cls-2").css("fill", "#f95c4f");
                $(".cls-1").css("fill", "white");

                imgSeq.src = images[frameNumber < 0 ? 0 : frameNumber].src;
            }
        }
    }
    loadedImage = (imageRef) => {

        this.setState({
            [imageRef]: $(`.${imageRef}`).height()
        })

    }
    onEnterFirst = (val) => {
        if (val.previousPosition === "above") {
        } else {
        }
    }
    onLeaveFirst = (val) => {
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("values", values)
                this.setState({
                    submitting: true,
                    error: false
                })
                this.props.contactForm(values)
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    finalize = () => {
        this.props.contactFormReset()
    }
    componentWillReceiveProps(newProps) {
        const { sent } = newProps.ContactFormState.ContactForm
        if (sent) {
            setTimeout(() => {
                this.setState({
                    submitting: false,
                    error: false,
                    sent: true
                })
            }, 2000);


        } else {
            setTimeout(() => {
                this.setState({
                    sent: false
                })
            }, 2000);


        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { buildingImageHeight, contactContainer, submitting } = this.state
        const pageHeight = buildingImageHeight + (contactContainer * .72)
        return (
            <React.Fragment>
                <div className="home-page" style={{ height: pageHeight }}>
                    <Waypoint
                        topOffset="100px"
                        onEnter={(val) => this.onEnterFirst(val)}
                        onLeave={(val) => this.onLeaveFirst(val)}
                    >
                        <div onLoad={() => this.loadedImage("buildingImageHeight")} className="buildingImageHeight" >
                            <Row className="building-row" >
                                <div id="video-holder" className="video-holder">
                                    <img className="img-seq buildingImageHeight" style={{ width: "100%" }} src={`${Images[0]}`} alt="" />
                                </div>
                                <div className="header-text hidemobile">
                                    < Plx
                                        parallaxData={[{
                                            start: 0,
                                            duration: 400,
                                            properties: [{
                                                startValue: 1,
                                                endValue: 0,
                                                property: "opacity"
                                            }]
                                        }]} >
                                        <h1>THE PLACE TO LIVE </h1>
                                        <h1>WHEN YOU'RE GOING PLACES</h1>
                                    </ Plx>
                                </div>

                            </Row>
                        </div>
                    </Waypoint>
                    <div className="mainContent" >
                        <Waypoint >
                            <div className="row-section second-row" >
                                <Row >
                                    <div onLoad={() => this.loadedImage("contactContainer")} className="contactContainer contact-container">
                                        <Row type="flex" align="bottom" justify="end" className="form-row-container">
                                            <Col className="form-col">
                                                <div className="contact-form-container" >
                                                    <div className="header-text contact-form-header hidedesktop">
                                                        <h1>THE PLACE TO LIVE </h1>
                                                        <h1>WHEN YOU'RE GOING PLACES</h1>
                                                    </div>

                                                    <h3>
                                                        <span className="contact-header-text">COMING SOON</span>
                                                        <br />
                                                        {/* AT YOUR CONVENIENCE */}
                                                    </h3>
                                                    <p>
                                                        Register below for priority information on the Hillrose28 at <br />181 East 28th Street. A ground-up full-service luxury condominium.
                                                </p>

                                                    <Form className="contact-form" id="contact-form" onSubmit={this.handleSubmit}>
                                                        <Row className="input-row" type="flex" justify="end">
                                                            <Form.Item className="name-item first-name">
                                                                {getFieldDecorator('first-name', {
                                                                    rules: [
                                                                        {
                                                                            required: true,
                                                                            message: 'Required!'
                                                                        },
                                                                    ],
                                                                })(
                                                                    <div>
                                                                        <Input />
                                                                        <p className="input-label">First name*</p>
                                                                    </div>
                                                                )}
                                                            </Form.Item>
                                                            <Form.Item className="name-item last-name">
                                                                {getFieldDecorator('last-name', {
                                                                    rules: [
                                                                        {
                                                                            required: true,
                                                                            message: 'Required!',
                                                                        },
                                                                    ],
                                                                })(
                                                                    <div>
                                                                        <Input />
                                                                        <p className="input-label">Last name*</p>
                                                                    </div>

                                                                )}
                                                            </Form.Item>
                                                            <Form.Item className="contact-form-item">
                                                                {getFieldDecorator('email', {
                                                                    rules: [
                                                                        {
                                                                            type: 'email',
                                                                            message: 'The input is not valid E-mail!',
                                                                        },
                                                                        {
                                                                            required: true,
                                                                            message: 'Please input your E-mail!',
                                                                        },
                                                                    ],
                                                                })(
                                                                    <div>
                                                                        <Input />
                                                                        <p className="input-label">Email*</p>
                                                                    </div>

                                                                )}
                                                            </Form.Item>
                                                            <Form.Item className="contact-form-item broker">
                                                                {getFieldDecorator('broker')(
                                                                    <Radio.Group>
                                                                        <span className="broker-text">Are you a broker?</span>
                                                                        <Radio className="radio-option" value="true">Yes</Radio>
                                                                        <Radio className="radio-option" value="false">No</Radio>
                                                                    </Radio.Group>,
                                                                )}
                                                            </Form.Item>
                                                            <Form.Item className="contact-form-item">
                                                                {getFieldDecorator('notes', {
                                                                })(
                                                                    <div>
                                                                        <Input />
                                                                        <p className="input-label">Notes</p>
                                                                    </div>

                                                                )}
                                                            </Form.Item>

                                                        </Row>


                                                        <Form.Item >
                                                            <Button loading={submitting} className="submit-btn" type="primary" htmlType="submit">
                                                                Submit
                                                        </Button>

                                                        </Form.Item>
                                                        <Form.Item>

                                                            <img src={Corcoran} alt="" style={{ width: "50%", float: "right" }} />


                                                        </Form.Item>
                                                        <p className="terms">This advertisement is not an offering. It is a solicitation of interest in the advertised property. No offering of the advertised units can be made and no deposits can be accepted, or reservations, binding or  non-binding, can be made until an offering plan is filed with the New York State Department of Law. This advertisement is made pursuant to Cooperative Policy Statement #1, issued by the New York State Department of Law.  File No. CP19-0038.  Sponsor: 157-161 East 28th Street LLC
                                                         {/* c/o Coral Realty, 400 Broome Street, 11th Floor, New York, New York 10013. */}
                                                        </p>
                                                    </Form>

                                                </div></Col>
                                        </Row>
                                    </div >

                                </Row>
                            </div>
                        </Waypoint>

                    </div>



                </div>

            </React.Fragment >
        )
    }
}
const HomePageForm = Form.create({ name: 'contact' })(HomePage);

const mapStateToProps = state => ({
    ContactFormState: state

})

const mapDispatchToProps = dispatch => bindActionCreators({
    contactForm, contactFormReset
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePageForm)