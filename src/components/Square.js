import { Edges } from "@react-three/drei";
import { useSelectedStore } from "../stores/useSelectedStore";

const Square = ({ position, color }) => {
    const { setSelected, selectedStore } = useSelectedStore();

    return (
        <mesh position={[position.x * 10, 0, position.y * 10]} onClick={() => setSelected(position) }>
            <boxGeometry args={[10, 1, 10]} />
            { position === selectedStore && <Edges color={'hotpink'} />}
            <meshStandardMaterial 
                color={color ? 0xFFFFFF : 0x000000} />
        </mesh>
    );
}

export default Square;