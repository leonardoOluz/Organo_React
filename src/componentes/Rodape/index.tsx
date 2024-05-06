import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/leoluz10/' target='_blank' rel='noreferrer' >
                            <img src='./imagens/fb.png' alt='Icone facebook' />
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/leoluz12' target='_blank' rel='noreferrer'>
                            <img src='./imagens/tw.png' alt='' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/luz.leo/' target='_blank' rel='noreferrer'>
                            <img src='./imagens/ig.png' alt='' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='./imagens/logo.png' alt='icone do logo alura' />
            </section>
            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
};

export default Rodape;