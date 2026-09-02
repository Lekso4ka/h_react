import { getMenu } from "../../data";

export function getLeftNav() {
    return getMenu()?.left || [];
}

export function getRightNav() {
    return getMenu()?.right || [];
}

export function getAllMenuNav() {
    return [...getLeftNav(), ...getRightNav()].filter((item) => item.hasMenu);
}

export function getMobileNav() {
    return getMenu()?.mobile || [];
}
