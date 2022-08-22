import { useEffect, useState } from 'react';
import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import restartIcon from './svgs/restart.svg';
import InfoItem from './components/InfoItem';
import Button from './components/Button';
import GridItem from './components/GridItem';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items';

const App = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElepsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType[]>([]);

    useEffect(() => {
        resetAndCreateGrid();
    }, []);

    const handleItemClick = (index: number) => {};

    const resetAndCreateGrid = () => {
        setTimeElepsed(0);
        setMoveCount(0);
        setShownCount(0);

        const tmpGrid: GridItemType[] = [];
        for (let i = 0; i < items.length * 2; i++) {
            tmpGrid.push({
                item: null,
                shown: false,
                permanentShown: false,
            });
        }

        for (let w = 0; w < 2; w++) {
            for (let i = 0; i < items.length; i++) {
                let pos = -1;
                while (pos < 0 || tmpGrid[pos].item !== null) {
                    pos = Math.floor(Math.random() * (items.length * 2));
                }
                tmpGrid[pos].item = i;
            }
        }

        setGridItems(tmpGrid);
        setPlaying(true);
    };

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

                <Button label='Reiniciar' icon={restartIcon} onClick={resetAndCreateGrid} />
            </C.Info>

            <C.GridArea>
                <C.Grid>
                    {gridItems.map((item, index) => (
                        <GridItem key={index} item={item} onClick={() => handleItemClick(index)} />
                    ))}
                </C.Grid>
            </C.GridArea>
        </C.Container>
    );
};

export default App;
