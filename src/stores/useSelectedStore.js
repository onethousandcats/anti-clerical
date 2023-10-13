import { atom, computed } from "nanostores";
import {useStore} from "@nanostores/react";
import { $board } from "./useBoardStore";
import { positionToFlat } from "../util/helpers";

export const $selected = atom({});

export const useSelectedStore = () => {
    const selectedStore = useStore($selected);

    const setSelected = (val) => {
        $selected.set(val);
    }

    const selected = computed([$selected, $board], (selected, board) => { 
        return {selected, piece: board[positionToFlat(selected)]};
    });

    return {
        selected,
        setSelected,
        selectedStore,
    }
};