import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useReadyStateEffect } from 'react-ready-state-effect';
import { IPropsComponent } from '../interface/PropsComponent';
import '../style/carousel.css';

interface IPropsCarousel extends IPropsComponent {
  titulo: string,
}

const CarouselComponent:React.FC<IPropsCarousel> = ({
  arrayProps,
  functionProps,
  titulo
  }:IPropsCarousel) => {

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [pagina, setPagina] = useState(true);

    function verificarIndexEmRepouso():number {
      return arrayProps.findIndex((e) => e === 'Em Repouso');
    }

    const handleSelect = (selectedIndex:number, e:any) => {
      setPagina(false);
      setIndex(selectedIndex);

      if (titulo === 'Inclinação') {
        localStorage.setItem('Estado Cabeça', arrayProps[selectedIndex]);
      }

      if (titulo === 'Braço Esquerdo') {
        localStorage.setItem('Estado Esquerdo', arrayProps[selectedIndex]);
      }

      if(titulo === 'Braço Direito') {
        localStorage.setItem('Estado Direito', arrayProps[selectedIndex]);
      }

      functionProps(arrayProps[selectedIndex])
    };
    
    useReadyStateEffect(() => {
      console.log(`Document loading completed.`);
      }, [], "complete"
    );

    return (
      <Carousel
        activeIndex={ pagina ? verificarIndexEmRepouso() : index }
        onSelect={ handleSelect }
        interval={ null }
        className="carousel"
        variant={'dark'}
        nextLabel={ null }
        indicators={ false }
      >
        {arrayProps.map((item:string, e:any) => 
        <Carousel.Item key={e} data-testid="carousel-cabeca">
          <p className="text-dark pl-3 item-carousel" data-testid={ item }>
            { item }
          </p>
        </Carousel.Item>)}
      </Carousel>
    );
  }
  
  return(<ControlledCarousel />);
}

export default CarouselComponent;