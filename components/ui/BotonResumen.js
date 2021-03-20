import React, {useContext} from 'react';
import { Button, Text } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native'
import PedidoContext from '../../context/perdidos/pedidosContext';

const BotonResumen = () => {

    const navigation = useNavigation();

    // Leer el objeto de pedido
    const { pedido } = useContext(PedidoContext);
 //regresaara null si no tenemos pedido por lo tanto no mostrara el boton
    if(pedido.length === 0) return null;

    return ( 
        <Button 
            onPress={ () => navigation.navigate("ResumenPedido") }
            style={globalStyles.boton}
        >
            <Text style={globalStyles.botonTexto}>Ir a Pedido</Text>
        </Button>
     );
}
 
export default BotonResumen;