import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Contact from './components/Contact';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: [
         { name: "Jermaine Antwi", phone: "023456789" },
         { name: "Kofi Annan", phone: "023456789" },
         { name: "Lego Man", phone: "023456789" },
         { name: "Tom Cook", phone: "023456789" },
         { name: "Chrisitano Ronaldo", phone: "023456789" },
         { name: "Jermaine Antwi", phone: "023456789" },
         { name: "Kofi Annan", phone: "023456789" },
         { name: "Lego Man", phone: "023456789" },
         { name: "Tom Cook", phone: "023456789" },
         { name: "Chrisitano Ronaldo", phone: "023456789" }
       ]
    }
  }
  
  render(){
  return (
    <SafeAreaView>
      <ScrollView>
         <FlatList
         data={this.state.data}
         renderItem={(data) => <Contact data={data.item} />}
         keyExtractor={(item, index) => item.index}
         />
      </ScrollView>
    </SafeAreaView>
  )
  }
}

const styles = StyleSheet.create({
  
});
