import React from 'react';
import Carousel from 'react-elastic-carousel';

class Instalaciones extends React.Component {
  constructor(props) {
    super(props)
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
    ]
  }
  render() {
    return (
      <div className="carousel">
      <Carousel breakPoints={this.breakPoints}>
        <img src="https://thejournal.com/-/media/EDU/THEJournal/2019-Images-Editorial/20190710commons.jpg" alt="" style={{width:'500px'}}/>
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/6693/production/_111995262_gettyimages-1139930327.jpg" alt="" style={{width:'500px'}}/>
        <img src="https://d7rh5s3nxmpy4.cloudfront.net/CMP1431/1/LHIL153BI25427_USA_000041_Roosevelt_High_School_IMD.JPG" alt="" style={{width:'500px'}}/>
      </Carousel>
      </div>
    )
  }
}

export default Instalaciones;