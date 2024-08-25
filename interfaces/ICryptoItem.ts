import { Href } from "expo-router";
import { ICrypto } from "./ICrypto";

export interface ICryptoItem {
    item: ICrypto;
    expanded: boolean;
    onPress: () => void;
    href: Href<string | object>
    onPressMoreInfo: () => void;
}