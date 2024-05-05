import {Text, StyleSheet,View, Button,Pressable} from 'react-native';
export default function Donate(){
    return(<>
      <Text style={style.basetext}>
      <Text style={style.title1}>General Donations{'\n'}{'\n'}</Text>
All activities, including development of facilities, leasing are fully funded from donations and contributions from devotees and the community. Arihant Jain Sangh deeply appreciates your kind and generous support.{'\n'}{'\n'}{'\n'}

All donations are<Text style={style.inline}> tax deductible.</Text>{'\n'}{'\n'}{'\n'}

Donations can be made via <Text style={style.inline}> e-Transfer, Debit Card, Cheque or Website.{'\n'}</Text></Text>   

<Pressable style={style.button} >
      <Text style={style.text}>Donate</Text>
    </Pressable>


<Text style={style.basetext}>
<Text style={style.title1}>Cheque</Text>{'\n'}{'\n'}
Send the cheque payable to <Text style={style.highlight}>Arihant Jain Sangh or Shree Arihant Shwetamber Murti Pujak Jain Sangh</Text>{'\n'}{'\n'}

Mail your cheque to: 350 Rutherford Rd South, Unit #7, Brampton, ON L6W 4N6
</Text>
</>
);
}
const style=StyleSheet.create({
basetext:{
    fontSize:19
   
},
title1:{
    fontSize:30,
    fontWeight:'bold'
},
inline:{
    fontWeight:'bold'
},
button:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DB4242',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    
     
},
text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
highlight:{

},

})