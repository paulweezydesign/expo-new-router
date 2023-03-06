
  import { View, Button } from 'react-native';
  import React, {useState} from 'react';
  import { MotiView } from 'moti'

  
  export default function Demo(props) {
    const [isOpen, setIsOpen] = useState(false);



  
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}>
               {isOpen && (
        <MotiView
        from={{ x: 0 }}
        animate={{ x: 300 }}
        transition={{ type: 'timing', duration: 600 }}
          style={[{position: 'absolute', top: 0, left: 0, width: 300, height: '100vh', backgroundColor: 'black', }]}
        ></MotiView>
        )}
         <Button title='Click me fooo' onPress={() => setIsOpen(isOpen => !isOpen)} >
            Toggle
        </Button>
      </View>
    );
  }