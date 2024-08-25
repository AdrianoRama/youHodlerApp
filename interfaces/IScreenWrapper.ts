import { GestureResponderEvent } from "react-native"

export interface IScreenWrapper {
    children: React.ReactNode
    backButton?: boolean
    onPressBack?: ((event: GestureResponderEvent) => void) | undefined
}