import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type ProductParamList = {
    Product: {
        name: string;
    },
    EditProduct: {
        name: string;
        submit?:React.MutableRefObject<() => void>
    }
}

export type ProductNavProps<T extends keyof ProductParamList> = {
    navigation: StackNavigationProp<ProductParamList,T>;
    route: RouteProp<ProductParamList, T>;
}