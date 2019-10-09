import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import Airtable from 'airtable';

import Product from '../components/Product';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,

} from 'react-native';

import { MonoText } from '../components/StyledText';


// Initializing DC Base: Can probably be done somewhere else but here for now.
const base = new Airtable({ apiKey: ''}).base(
    "app4fXK49bqcjDMEo"
);
const productsTable = base("Products").select({view: "Grid view"})
var productsList = [];
var keyValue;
productsTable.firstPage((err, records) => {
    if (err) {
        console.error(err);
        return;
    }
    productsNames = records.map(record => record.get("Name"))
    // idList = records.map(record => record.id)
    productList = productsNames.map(product => createProductData(product))
})

class ProductsScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          productsList: productsList,
      };
    }
    

    render() {
        const productsList = this.state.productsList
        return (
            <FlatList 
                style = {styles.container}
                numColumns = {2}
                data = {productsList}
                renderItem={({ product }) => (
                    <View style={styles.item}>
                        <Text>{product}</Text>
                    </View>
                    
                )}
                keyExtractor={(item, index) => index.toString()}>
            </FlatList>
        )
    }
}

{/* <ScrollView>
{productsList.map((product) => {
    return (
        <View>
            <Text>{product}</Text>
        </View>
    )
}
)}
</ScrollView> */}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 20,
    },
    item: {
    //   backgroundColor: '#4D243D',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 1,
      height: Dimensions.get('window').width / 2
    }
})

function createProductData(name) {
    return {
        name: name
    }
}

export default ProductsScreen;
