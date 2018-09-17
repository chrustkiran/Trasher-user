// import React from 'react';
// import { StyleSheet, Text, Image, View, Button,  TextInput, TouchableOpacity, KeyboardAvoidingView,Linking} from 'react-native';
// import { Container, Header, Content, Icon } from 'native-base';
// import Dimensions from 'Dimensions';


// export default class SignUpScreen extends React.Component {
  
//   static navigationOptions = {
//     title: 'Login',
//     headerStyle :{ backgroundColor : '#145a32', height : 50
//        , },
//   //    headerTitle: (
//   //      <Image source={require('../images/recycle.jpg')}/>
//   //  ),
//   };

//   state = {
//       username : '',
//   }

//   _navigateScreen(){
//     this.props.navigation.navigate('Main',{name : this.state.username})
//   }

//   _assignUsername(text){
//       this.setState({username : text});
//   }
  
//   render() {
//     const { navigate } = this.props.navigation;
    
  
//     return (

//       <KeyboardAvoidingView style={styles.container}>
       
//        <View style={styles.inputWrapper}>
//          <Text style={{color:'#FFF', fontFamily : 'AppleSDGothicNeo-Bold', fontSize : 25}}>T R A S H E R</Text>
//        </View>
//     <View style={styles.inputWrapper}>
//         <Icon type="Ionicons" name="person" style={styles.inlineImg} />
//         <TextInput
//           style={styles.input}
//           placeholder= "username"
//           underlineColorAndroid="transparent"
        
//         />
//      </View>


//         <View style={styles.inputWrapper}>
//         <Icon type="Ionicons" name="lock" style={styles.inlineImg} />
//         <TextInput
//           style={styles.input}
//           placeholder= "phone-number"
//           underlineColorAndroid="transparent"
//         />
//         </View>

//    <View style={styles.inputWrapper}>
//         <Icon type="Ionicons" name="lock" style={styles.inlineImg} />
//         <TextInput
//           style={styles.input}
//           placeholder= "email"
//           underlineColorAndroid="transparent"
//         />
//         </View>
//             <View style={styles.inputWrapper}>
//         <Icon type="Ionicons" name="lock" style={styles.inlineImg} />
//         <TextInput
//           style={styles.input}
//           placeholder= "Password"
//           underlineColorAndroid="transparent"
//         />
//         </View>

//             <View style={styles.inputWrapper}>
//         <Icon type="Ionicons" name="lock" style={styles.inlineImg} />
//         <TextInput
//           style={styles.input}
//           placeholder= "Re-Enter Password"
//           underlineColorAndroid="transparent"
//         />
//         </View>
      
//        <View style={styles.inputWrapper}>
//         <TouchableOpacity style={styles.button} onPress = {this._navigateScreen.bind(this)} >
//             <Text>C R E A T E</Text>
//         </TouchableOpacity>
//      </View>


//        <View style={styles.containerBottom}>
//         <Text style={styles.text}  onPress={() => Linking.openURL('http://google.com/search?q="why do you want sign up?"')}>Already have an account</Text>
     
//       </View>



       
//      </KeyboardAvoidingView>






  
//     );
//   }
// }

// const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#145a32',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputAndIcon: {
//     flex: 0.1,
//     flexDirection: 'row',
//     height:0.2,
//     backgroundColor : 'rgba(255,255,255,0.2)',
//     borderRadius: 5 ,
    
// },
// input: {
//   backgroundColor: 'rgba(255, 255, 255, 0.4)',
//   width: DEVICE_WIDTH - 40,
//   height: 40,
//   marginHorizontal: 20,
//   paddingLeft: 45,
//   borderRadius: 20,
//   color: '#000000',
// },
// inputWrapper: {
//   flex: 0.1,
// },
// inlineImg: {
//   position: 'absolute',
//   zIndex: 99,
//   width: 22,
//   height: 30,
//   left: 35,
//   top: 5,
// },
// button: {

//   backgroundColor: 'rgba(255, 255, 255, 0.4)',
//    width: DEVICE_WIDTH - 40,
//   // height: 40,
//   // marginHorizontal: 20,
//   // paddingLeft: 45,
//   borderRadius: 20,
//   alignItems : "center",
//   padding: 10
// },

// btnEye: {
//   position: 'absolute',
//   top: 55,
//   right: 28,
// },
// iconEye: {
//   width: 25,
//   height: 25,
//   tintColor: 'rgba(0,0,0,0.2)',
// },
// containerBottom: {
//   flex: 0.1,
//   top: 45,
//   width: DEVICE_WIDTH,
//   flexDirection: 'row',
//   justifyContent: 'space-around',
// },
// text: {
//   color: 'white',
//   backgroundColor: 'transparent',
//   alignItems : 'center'
// },
// });
