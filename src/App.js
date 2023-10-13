import { Canvas } from '@react-three/fiber';
import './App.css';
import { OrbitControls } from '@react-three/drei';
import Board from './components/Board';
import Square from './components/Square';
import Piece from './components/Piece';

function App() {
  return (
    <div className="App">
      <Canvas
        camera={{position: [100, 100, 100]}}>
        <ambientLight />
        <directionalLight intensity={0.5} color={0xFFFFCC} />
        <OrbitControls />
        { [...Array(36).keys()].map(i => {
            const x = i % 6;
            const y = Math.floor(i / 6);

            let color = !(x % 2 === 0 ^ y % 2 === 0);

            return (<Square position={{x, y}} color={color} />)
        })}
        {[...Array(6).keys()].map(i => {
            return (<Piece name={'Pawn'} position={[i, 1]} color={'white'} />)
        })};
        {[...Array(6).keys()].map(i => {
            return (<Piece name={'Pawn'} position={[i, 4]} color={'black'} />)
        })};

        <Piece name={'Queen'}  position={[2, 0]} color={'white'} />     
        <Piece name={'King'}  position={[3, 0]} color={'white'} />
        <Piece name={'Horse'}  position={[4, 0]} color={'white'} />     
        <Piece name={'Horse'}  position={[1, 0]} color={'white'} />
        <Piece name={'Rook'}  position={[5, 0]} color={'white'} />     
        <Piece name={'Rook'}  position={[0, 0]} color={'white'} />

        <Piece name={'Queen'}  position={[3, 5]} color={'black'} />     
        <Piece name={'King'}  position={[2, 5]} color={'black'} />
        <Piece name={'Horse'}  position={[4, 5]} color={'black'} />     
        <Piece name={'Horse'}  position={[1, 5]} color={'black'} />
        <Piece name={'Rook'}  position={[5, 5]} color={'black'} />     
        <Piece name={'Rook'}  position={[0, 5]} color={'black'} />
      </Canvas>
    </div>
  );
}

export default App;
