import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Image, Alert, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Location from 'expo-location';
import axios from 'axios';
import { Stopwatch } from 'react-native-stopwatch-timer'; // Add this import

const Home = ({ route }) => {
  const [rideState, setRideState] = useState('scan'); // Initial state is 'scan'
  const [dockId, setDockId] = useState(''); // State to store dockId
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [returnDockId, setReturnDockId] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const mapRef = useRef(null);
  const { token } = route.params;
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);
  const [rideDetails, setRideDetails] = useState({ bikeId: '', stationName: '' });

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      setLoading(false);
    };

    getLocation();
  }, []);

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getPermissions();
  }, []);

  const handleScanClick = () => {
    if (hasPermission === null) {
      Alert.alert('Checking Permission', 'Checking for camera permission...');
      return;
    }

    if (hasPermission) {
      setRideState('scanQRCode');
    } else {
      Alert.alert('Permission Required', 'Camera permission is needed to scan QR codes.');
    }
  };

  const handleBarcodeScanned = async ({ data }) => {
    setScanned(true);

    try {
      const requestUrl = `https://ecoride1-backend.onrender.com/api/home/dock/${data}`;
      const response = await axios.get(requestUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { dockId, status, bikeId, stationName } = response.data;
      setDockId(dockId);
      setRideDetails({ bikeId, stationName });

      if (status === 'occupied') {
        setRideState('startRide');
      } else if (status === 'empty') {
        setRideState('endRide');
        setReturnDockId(dockId);
      } else {
        Alert.alert('Error', 'Dock status is unknown.');
        setRideState('scan');
      }
    } catch (error) {
      Alert.alert('Error', error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 404) {
        Alert.alert('Error', 'Dock not found. Please try again.');
      }
      setRideState('scan');
    } finally {
      setScanned(false);
    }
  };

  const handleStartRideClick = async () => {
    if (!dockId) {
      Alert.alert('Error', 'No dock selected.');
      return;
    }

    try {
      const response = await axios.post(
        'https://ecoride1-backend.onrender.com/api/home/ride/start',
        { dockId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStopwatchStart(true); // Start the timer
      setRideState('scanReturnDock');
    } catch (error) {
      console.error('Error starting ride:', error);
      Alert.alert('Error', 'Failed to start the ride.');
    }
  };

  const handleEndRideClick = async () => {
    if (!returnDockId) {
      Alert.alert('Error', 'No dock selected for returning the bike.');
      return;
    }

    try {
      const response = await axios.post(
        'https://ecoride1-backend.onrender.com/api/home/ride/end',
        { dockId: returnDockId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStopwatchStart(false); // Stop the timer
      setStopwatchReset(true); // Reset the timer for next use
      setRideState('scan');
      setReturnDockId(null);
    } catch (error) {
      console.error('Error ending ride:', error);
      Alert.alert('Error', 'Failed to end the ride.');
    }
  };

  const bikeLocations = [
    { id: 'bike1', latitude: location ? location.latitude + 0.001 : 24.916668, longitude: location ? location.longitude + 0.001 : 67.090528 },
    { id: 'bike2', latitude: location ? location.latitude + 0.002 : 24.917668, longitude: location ? location.longitude + 0.002 : 67.091528 }
  ];

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading map...</Text>
        </View>
      )}

      {!loading && (
        <>
          {rideState === 'scanQRCode' && hasPermission !== null && (
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          )}

          {rideState !== 'scanQRCode' && (
            <MapView
              ref={mapRef}
              style={styles.map}
              initialRegion={{
                latitude: location ? location.latitude : 24.915668,
                longitude: location ? location.longitude : 67.089528,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
              showsUserLocation={true}
              showsMyLocationButton={true}
              onMapReady={() => setLoading(false)}
            >
              {location && (
                <Marker
                  coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                >
                  <Image
                    source={require('../assets/human.png')}
                    style={styles.customIcon}
                  />
                </Marker>
              )}

              {bikeLocations.map(bike => (
                <Marker
                  key={bike.id}
                  coordinate={{ latitude: bike.latitude, longitude: bike.longitude }}
                  title={`Bike ${bike.id}`}
                >
                  <Image
                    source={require('./assets/bicycle.png')}
                    style={styles.bikeIcon}
                  />
                </Marker>
              ))}
            </MapView>
          )}

          <View style={styles.buttonContainer}>
            {(rideState === 'scan' || rideState === 'scanReturnDock') && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleScanClick}
              >
                <Text style={styles.buttonText}>
                  {rideState === 'scan' ? 'SCAN TO UNLOCK' : 'SCAN TO LOCK'}
                </Text>
              </TouchableOpacity>
            )}

            {rideState === 'startRide' && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleStartRideClick}
              >
                <Text style={styles.buttonText}>START RIDE</Text>
              </TouchableOpacity>
            )}

            {rideState === 'endRide' && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleEndRideClick}
              >
                <Text style={styles.buttonText}>END RIDE</Text>
              </TouchableOpacity>
            )}
          </View>

          {rideState === 'startRide' && (
            <View style={styles.rideDetailsContainer}>
              <Text style={styles.rideDetailsText}>Bike ID: {rideDetails.bikeId}</Text>
              <Text style={styles.rideDetailsText}>Station Name: {rideDetails.stationName}</Text>
              <View style={styles.timerContainer}>
                <Stopwatch
                  start={stopwatchStart}
                  reset={stopwatchReset}
                  options={styles.stopwatch}
                  getTime={(time) => console.log(time)}
                />
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  customIcon: {
    width: 30,
    height: 30,
  },
  bikeIcon: {
    width: 40,
    height: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  rideDetailsContainer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  rideDetailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  timerContainer: {
    marginTop: 10,
  },
  stopwatch: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default Home;
