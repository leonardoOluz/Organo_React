import './Banner.css';
import React from 'react';

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

const Banner = ({ enderecoImagem, textoAlternativo }: BannerProps) => {
    // JSX
    return (
        <header className='banner'>
            {/* <img src="./imagens/banner.png" alt="Logo do cabeçalho do organo" /> */}
            <img src={enderecoImagem} alt={textoAlternativo} />
        </header>
    )
};

export default Banner;