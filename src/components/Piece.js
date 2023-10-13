import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSelectedStore } from "../stores/useSelectedStore";
import { useEffect, useState } from "react";
import { useBoardStore } from "../stores/useBoardStore";

const Piece = ({ name, position, color }) => {
    const { setSquare } = useBoardStore();
    const { selectedStore, setSelected } = useSelectedStore();
    const { nodes } = useLoader(GLTFLoader, 'models/pieces.glb');

    const [pos, setPos] = useState({x: position[0], y: position[1]});

    const white = color === 'white';
    const rotation = white ? 0 : Math.PI;

    const c = white ? 'red' : 'lightblue';

    const selected = selectedStore.x == pos.x && selectedStore.y == pos.y;

    useEffect(() => {
        // set square as occupied by this piece 
        setSquare(pos, {name, color});
    }, [])

    return (
        <mesh 
            scale={[1.6, 0.38, 1.6]} 
            position={[pos.x * 10, 0, pos.y * 10]} 
            geometry={nodes[name].geometry}
            rotation={[0, rotation, 0]}
            onClick={(e) => {
                e.stopPropagation(); 
                setSelected(pos); 
            }}>
            <meshStandardMaterial color={selected ? 'mediumspringgreen' : c} />
        </mesh>
    );
}

export default Piece;