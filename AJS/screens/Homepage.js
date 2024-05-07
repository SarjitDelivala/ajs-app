import React, { useState, useEffect } from 'react';
import { View, Text,TextInput, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import Mailer from 'react-native-mail';
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
      setSunrise(new Date(sunrise).toLocaleTimeString());
      setSunset(new Date(sunset).toLocaleTimeString());
    } catch (error) {
      console.error('Error fetching sunrise and sunset:', error);
    }
  };

  return (

    <View style={{ flex: 1, alignItems: 'center',margin:40, }}>
      
      <Text>Today's Sunrise and Sunset Timing</Text>
      <Text style={{ marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: 'black',
    backgroundColor: '#eaeaea',}}>Sunrise: {sunrise}</Text>
      <Text style={{ marginTop: 12,
    padding: 13,
    borderRadius: 8,
    color: 'black',
    backgroundColor: '#eaeaea',}}>Sunset: {sunset}</Text>
      
      
    </View>
  );
}
