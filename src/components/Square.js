import { Edges } from "@react-three/drei";
import { useSelectedStore } from "../stores/useSelectedStore";
import { useBoardStore } from "../stores/useBoardStore";

const Square = ({ position, color }) => {
    const { selected, setSelected, selectedStore } = useSelectedStore();
    const { getSquare } = useBoardStore();

    const clickSquare = () => {
        const previous = selected.get();
        setSelected(position);

        if (previous.piece !== undefined && selected.get().piece === undefined) {
            console.log("ok to move here");
        }

    };

    return (
        <mesh position={[position.x * 10, 0, position.y * 10]} onClick={clickSquare}>
            <boxGeometry args={[10, 1, 10]} />
            { position === selectedStore && <Edges color={'hotpink'} />}
            <meshStandardMaterial 
                color={color ? 0xFFFFFF : 0x000000} />
        </mesh>
    );
}

export default Square;