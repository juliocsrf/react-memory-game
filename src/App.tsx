import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import restartIcon from './svgs/restart.svg';
import InfoItem from './components/InfoItem';
import Button from './components/Button';

const App = () => {
    const resetAndCreateGRid = () => {};

    return (
        <C.Container>
            <C.Info>
                <C.LogoLink href=''>
                    <img src={logoImage} width='200' alt='' />
                </C.LogoLink>

                <C.InfoArea>
                    <InfoItem label='Tempo' value='00:00' />
                    <InfoItem label='Movimentos' value='0' />
                </C.InfoArea>

                <Button label='Reiniciar' icon={restartIcon} onClick={resetAndCreateGRid} />
            </C.Info>

            <C.GridArea></C.GridArea>
        </C.Container>
    );
};

export default App;
