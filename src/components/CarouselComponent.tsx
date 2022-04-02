import React, { useState } from 'react';
// import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { useReadyStateEffect } from 'react-ready-state-effect';
import '../style/carousel.css';

const CarouselComponent:React.FC<any> = ({arrayProps, functionProps}:any) => {

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [pagina, setPagina] = useState(true);
    const [emRepouso, setEmRePouso] = useState('Em Repouso');
  
    const handleSelect = (selectedIndex:number, e:any) => {
      setIndex(selectedIndex);
      setPagina(false);
      const result = arrayProps.findIndex((e:string) => e === 'Em Repouso');
      console.log(result);
      console.log(arrayProps[result]);
      setEmRePouso(arrayProps[result]);
      functionProps(arrayProps[selectedIndex]);
    };

    useReadyStateEffect(() => {
        console.log(`Document loading completed.`);
      }, [], "complete"
    );

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
          <p className="text-dark pl-3 item-carousel">{pagina ? arrayProps.find((e:string) => e === 'Em Repouso') : item}</p>
        </Carousel.Item>)}
      </Carousel>
    );
  }
  
  return(<ControlledCarousel />);
}

export default CarouselComponent;