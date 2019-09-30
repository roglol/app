import React from 'react';
import './whygeorgia.scss';
import { Carousel } from 'react-responsive-carousel';



class WhyGeorgia extends React.Component {
    state = {
        data: [],
        titles: [
            'Very Competitive labor and energy costs',
            'Simple straight forward low and efficient taxation',
            "6th easiest country to do business in (World Bank's Ease of Doing Business Report 2019)",
            'IT exporting companies zero VAT',
            "Huge government's investment in the high tech industry",
            "Excelent English and communication skills",
            "Only 2.5 hours flights TLV"
        ],
        images: 'avtovarmartovar',
        index: 0,
        transition: false
    }

    componentDidUpdate(prevProps, prevState) {
        let { index} = { ...this.state }
        if (prevState.index !== index) {
            this.setState({ transition: true })
        }
    }

    previousArticle = () => {
        let { index } = { ...this.state }
        index !== 0 ? index -= 1 : index = 0;
        this.setState({ index })
    }

    nextArticle = () => {
        let { index, titles } = { ...this.state }
        index === titles.length - 1 ? index = titles.length - 1 : index += 1;
        this.setState({ index })
    }

    async componentDidMount() {

        // try {
        //     let res = await fetch('http://localhost:3001/api/georgia-pictures');
        //     if (!res.ok) {
        //         throw Error(res.statusText);
        //     }
        //     const json = await res.json();
        //     // console.log(json);
        //     this.setState({ images: json.data });
        // } catch (error) {
        //     console.log(error);
        // }

    }

    render() {
        let { titles, index, images, transition } = { ...this.state }
        return (
            <div className='georgia-background' id="georgia">



                {images ?
                    <Carousel>
                        <div className="image-container">
                            <img alt="" src="https://firebasestorage.googleapis.com/v0/b/upload-pictures-4e4f6.appspot.com/o/images%2Fwp4059411.jpg?alt=media&token=2609a858-2215-4d64-9b9a-9bf977f7a648" />
                        </div>
                        <div className="image-container">
                            <img alt="" src="https://firebasestorage.googleapis.com/v0/b/upload-pictures-4e4f6.appspot.com/o/images%2Fwp4059411.jpg?alt=media&token=2609a858-2215-4d64-9b9a-9bf977f7a648" />
                        </div>
                    </Carousel>
                    : <div></div>
                }
                <div className="georgia-container">
                    <div className="header">
                        <div className="flags">

                            <div className="oval1"><img className='flags-icons' src={require('./georgia-flag.png')} alt="" />
                            </div>
                            <div className="oval">
                                <img className='flags-icons' src="https://a.icons8.com/jmghQrpd/p55Q19/bitmap.png" alt="" />
                            </div>
                        </div>
                        <div className="header-text">Why Georgia?</div>
                    </div>
                    <div className="georgia-information-container">
                        <ul className='georgia-information-nav'>
                            {this.state.titles.map((item, i) => (
                                <li key={i}><img alt='' className='check_circ' src="https://a.icons8.com/jmghQrpd/s72fMC/round--action--check_circ.png"></img> {item}</li>
                            ))}

                        </ul>
                    </div>
                    {
                        <div onAnimationEnd={() => this.setState({ transition: false })} className={"georgia-information-mobile " + (transition === true ? 'transition' : ' ')} >
                            <div className='checkbox-image'>
                                <img src="https://a.icons8.com/kibdoQeV/ip2lVF/oval.png" alt="" />

                            </div>

                            <div className='georgia-information-description gray-text'>{titles[index]}</div>

                        </div>
                    }
                    <div className="information-navigation">
                        <div onClick={this.previousArticle} className="left">

                            <img src="https://a.icons8.com/kibdoQeV/ZLNHPB/chevron_left.png" alt="" />
                        </div>
                        <div onClick={this.nextArticle} className="right">
                            <img src="https://a.icons8.com/kibdoQeV/t53Y4L/chevron_left.png" alt="" />
                        </div>
                    </div>
                </div>
                </div>
                )
            }
        
        }

        
export default WhyGeorgia;