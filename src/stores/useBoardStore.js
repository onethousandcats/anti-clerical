import { useStore } from "@nanostores/react";
import { map } from "nanostores"
import { positionToFlat } from "../util/helpers";

export const $board = map();

export const useBoardStore = () => {
    const board = useStore($board);

    const setSquare = (position, piece) => {
        const flat = positionToFlat(position);
        $board.setKey(flat, piece);
    }

    const getSquare = (position) => {
        return $board.value[positionToFlat(position)];
    }

    return {
        board,
        getSquare,
        setSquare,
    };
}