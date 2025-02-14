import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Next from "./Next"
import Header from "./Header"
import Card from "./Card"

class Recommendations extends Component {
  viewMap(){
    this.props.nextRoute({id:'Map', title: 'Map View'});
  }

  recGenerator() {
    let context = this;
    const recommendations = [{
        std: 'HIV/STD Tests',
        procedures: ['Blood Test', 'Oral Swab Test', 'Urine Test'],
        testCenters: 'Find a Testing Center'
      }, {
        std: 'Gonorrhea Tests',
        procedures: ['Urine Test','Nucleic acid amplification tests', 'Gonorrhea culture'],
        testCenters: 'Find a Testing Center'
      }, {
        std: 'Hepatitis B Test',
        procedures: ['Blood Test'],
        testCenters: 'Find a Testing Center'
      }];
    return recommendations.map(function(rec, index) {
      return <Card
        viewMap={context.viewMap.bind(context)}
        std={rec.std}
        key={index}
        procedures={rec.procedures}
        testCenters={rec.testCenters}
         />;
    });
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(){
    return (
      <View style={{backgroundColor:'#0C94B9', flex:1}}>
          <Header value="Recommendations" navigator={this.props.navigator}/>

          <View style={styles.container} >
            <Text style={styles.paragraph}>
              Dr. Dick recommends the following tests based on your responses.
            </Text>
            {this.recGenerator()}     
          </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraphHeader: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center'
  },
  paragraph: {
    width: 300,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 15,
    color: '#fff'
  },
  container: {
    flex: 11,
    alignItems: 'center',
    backgroundColor: '#0C94B9'
  },
});

export default Recommendations
