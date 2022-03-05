import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'


// interface RouterParams {
//     id: number,
//     name: string
//     manera de tipar cualquier cosa
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }
// le paso a mi interface el paramt list RootStackParams y el nombre de la pagina de esta manera la interface queda mejor

export const PersonaScreen = ({route, navigation}: Props) => {

    // const params = route.params as RouterParams;
    const params = route.params;

   useEffect(() => {
     navigation.setOptions({
         title: params.name
     })
   }, [])
   
    

    // console.log(JSON.stringify(props, null, 3) )
    return (
        <View style={styles.globalMargin}>

            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
        </View>
    )
}
