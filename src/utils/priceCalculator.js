import { floor } from "lodash";

export function getPrice(itemsCount, itemPrice, discount){
    return floor(itemsCount*itemPrice*(1 - discount/100))
}