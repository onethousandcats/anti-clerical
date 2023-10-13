import { Edges } from "@react-three/drei";

const Board = () => {
    return (
        <mesh>
            <boxGeometry args={[60, 1, 60]} />
            <Edges color={0x9AC2E3} />
            <meshStandardMaterial color={0xFFB5EB} />
        </mesh>
    );
}

export default Board;