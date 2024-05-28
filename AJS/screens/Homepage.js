import React, { useState, useEffect } from 'react';
import { View, Text,TextInput, Button, Alert ,StyleSheet} from 'react-native';
import * as Location from 'expo-location';
import { Feather } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
export default function Homepage({ navigation }) {
  const [location, setLocation] = useState({ coords: { latitude: null, longitude: null } });
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);

  useEffect(() => {
    getLocationPermission();
  }, []);

  useEffect(() => {
    if (location.coords.latitude && location.coords.longitude) {
      getSunriseSunset();
    }
  }, [location]);

  const getLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
    console.log('Location:', currentLocation);
  };

  const getSunriseSunset = async () => {
    const { latitude, longitude } = location.coords;
    const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { sunrise, sunset } = data.results;
 
  const sunriseTime = new Date(sunrise);
  const sunsetTime = new Date(sunset);

  const sunriseHours = sunriseTime.getHours();
  const sunriseMinutes = sunriseTime.getMinutes();
  const sunsetHours = sunsetTime.getHours();
  const sunsetMinutes = sunsetTime.getMinutes();

 
  const sunriseFormatted = formatTime(sunriseHours, sunriseMinutes);

 
  const sunsetFormatted = formatTime(sunsetHours, sunsetMinutes);

  setSunrise(sunriseFormatted);
  setSunset(sunsetFormatted);
    } catch (error) {
      console.error('Error fetching sunrise and sunset:', error);
    }
  };

  return (

    <View style={{ flex: 1, alignItems: 'center',margin:40, }}>
      
      <Text style={{marginBottom:9}}>Today's Sunrise and Sunset Timing</Text>
      <Feather name="sunrise" size={23} color="black" >
      <Text > {sunrise}</Text>
      </Feather>
      <Feather name="sunset" size={23} color="black" >
        <Text> {sunset}</Text></Feather>
        <Calendar />
      <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.text}>Navkarshi:Time </Text>
        <Text style={styles.text}>Porshi:Time </Text>
        <Text style={styles.text}>Sadh Proshi:Time </Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>Purimaddh:Time </Text>
        <Text style={styles.text}>Avaddh:Time </Text>
        <Text style={styles.text}>Chovihar:Time </Text>
      </View>
    </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    
    padding: 20,
  },
  column: {
    justifyContent: 'center',
   
  },
  text: {
    marginBottom: 15,
    marginLeft:10,
    fontSize: 16,
    
  },
});
const formatTime = (hours, minutes) => {
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; 
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; 
  return `${formattedHours}:${formattedMinutes} ${meridiem}`;
};