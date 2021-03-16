import React, { useReducer } from 'react';

import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';



const FirebaseState = props => {

    // Crear state inicial
    const initialState = {
        menu: []
    }

    // useReducer con dispatch  para ejecutar las funciones
    const [ state, dispatch ] = useReducer(FirebaseReducer, initialState);

      // Función que se ejecuta para traer los productos
      const obtenerProductos = () => {
  

        // consultar firebase
        firebase.db
            .collection('productos')
            .where('existencia', '==', true) // traer solo los que esten en existencia
            .onSnapshot(manejarSnapshot); //real-time 

        function manejarSnapshot(snapshot) {
            let platillos = snapshot.docs.map(doc => {
                return {
                    id: doc.id, //id del platillo XD
                    ...doc.data()//datos del platillo
                }
            });

            // Ordenar por categoria con lodash
            platillos = _.sortBy(platillos, 'categoria');

            // console.log(platillos)

            // Tenemos resultados de la base de datos
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: platillos
            });
        }
    }


    return (
        <FirebaseContext.Provider
           value={{
               menu: state.menu,
               firebase,
               obtenerProductos
           }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;