import React from 'react';
import {} from 'react-native';
import Routes from './src/Navigation/Routes';

const App = () => {
  return <Routes />;
};

export default App;
// import React from 'react';
// import { SafeAreaView, StyleSheet, View, Button } from 'react-native';
// import Login from './src/screen/Login';
// import Signup from './src/screen/Signup';
// import Routes from './src/Navigation/Routes';
// import Login from './Login';
// import Signup from './Signup';

// const App = () => {
//   const [showLogin, setShowLogin] = React.useState(true);

//   return (
    
//     <SafeAreaView style={styles.container}>
//           <Routes />
  
//       {showLogin ? <Login/> : <Signup />}
//       <View style={styles.switchButton}>
//         <Button
//           title={showLogin ? "Go to Signup" : "Go to Login"}
//           onPress={() => setShowLogin(!showLogin)}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   switchButton: {
//     padding: 20,
//   },
// });

// export default App;
