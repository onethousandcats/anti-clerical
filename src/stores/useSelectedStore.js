import { atom } from "nanostores";
import {useStore} from "@nanostores/react";

export const $selected = atom({});

export const useSelectedStore = () => {
    const selectedStore = useStore($selected);

    const setSelected = (val) => {
        $selected.set(val);
    }

    return {
        setSelected,
        selectedStore,
    }
};