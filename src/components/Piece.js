import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSelectedStore } from "../stores/useSelectedStore";
import { useEffect } from "react";

const Piece = ({ name, position, color }) => {
    const { selectedStore, setSelected } = useSelectedStore();
    const { nodes } = useLoader(GLTFLoader, 'models/pieces.glb');

    const p = {x: position[0], y: position[1]};

    const white = color === 'white';
    const rotation = white ? 0 : Math.PI;

    const c = white ? 'red' : 'lightblue';

    const selected = selectedStore.x == p.x && selectedStore.y == p.y;

    return (
        <mesh 
            scale={[1.6, 0.38, 1.6]} 
            position={[p.x * 10, 0, p.y * 10]} 
            geometry={nodes[name].geometry}
            rotation={[0, rotation, 0]}
            onClick={() => setSelected(p)}>
            <meshStandardMaterial color={selected ? 'mediumspringgreen' : c} />
        </mesh>
    );
}

export default Piece;