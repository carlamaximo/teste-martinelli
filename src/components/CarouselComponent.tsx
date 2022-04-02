import React, { useState } from 'react';
// import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import '../style/carousel.css';

const CarouselComponent:React.FC<any> = ({arrayProps, functionProps}:any) => {

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex:number, e:any) => {
      setIndex(selectedIndex);
      // console.log(selectedIndex);
      // console.log(arrayProps);
      // console.log(e.target);
      // console.log(arrayProps[selectedIndex]);
      functionProps(arrayProps[selectedIndex]);
    };


    return (
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="carousel"
        variant={'dark'}
        nextLabel={null}
        indicators={false}
      >
        {arrayProps.map((item:string, e:any) => 
        <Carousel.Item key={e}>
            <p className="text-dark pl-3 item-carousel">{item}</p>
        </Carousel.Item>)}

        {/* <Carousel.Item>
            <p className="text-dark pl-3 item-carousel">Pra Cima</p>
        </Carousel.Item>

        <Carousel.Item>
            <p className="text-dark item-carousel">Em Repouso</p>
        </Carousel.Item>

        <Carousel.Item>
            <p className="text-dark item-carousel">Pra Baixo</p>
        </Carousel.Item> */}
      </Carousel>
    );
  }
  
  return(<ControlledCarousel />);
}

// const mapStateToProps = (state:any) => ({
//   rotation: state.rotationHeadReducer.rotation,
//   inclination: state.inclinationHeadReducer.inclination,
//   cotoveloEsquerdo: state.cotoveloEsquerdoReducer.cotoveloEsquerdo,
//   pulsoEsquerdo: state.pulsoEsquerdoReducer.pulsoEsquerdo,
//   cotoveloDireito: state.cotoveloDireitoReducer.cotoveloDireito,
//   pulsoDireito: state.pulsoDireitoReducer.pulsoDireito,
// });

// export default connect(mapStateToProps, null)(CarouselComponent);

export default CarouselComponent;