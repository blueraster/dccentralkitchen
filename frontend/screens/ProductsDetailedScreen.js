import React from 'react';
import Airtable from 'airtable';
import { styles, Button } from '../styles.js';
import Product from '../components/Product';
import ProductInfo from '../components/ProductInfo';


import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class ProductsDetailedScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    const currentProduct = this.props.navigation.state.params.currentProduct;
    return (
      <View style={styles.imageContainer}>
        <ProductInfo product={currentProduct}/>
        <View style={{marginTop: 40}}>
          <Image
            source={require('../assets/images/robot-dev.png')}
            style={{ width: 80, height: 80, borderRadius: 80 / 2 }}/>
        </View>
      </View>
      )
    }
    
  }
  
  export default ProductsDetailedScreen;
