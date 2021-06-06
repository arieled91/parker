import {StyleSheet, View} from "react-native";
import React from "react";
import MapView, {EventUserLocation, Marker, MarkerProps, Region} from "react-native-maps";
import useLocation from "../hooks/useLocation";
import {Button, Icon, useTheme} from "@ui-kitten/components";
import {IconProps} from "@ui-kitten/components/ui/icon/icon.component";
import darkMap from "../theme/darkMap";
import useColorScheme from "../hooks/useColorScheme";

const Map = (): JSX.Element | null => {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const {location} = useLocation();
  const [region, setRegion] = React.useState<Region>()
  const [followUser, setFollowUser] = React.useState<boolean>(true)
  const [vehicle, setVehicle] = React.useState<MarkerProps | null>(null)
  const [optionsVisible, setOptionsVisible] = React.useState<boolean>(false)

  if(!location) return null;
  
  const createRegion = (lat: number, lon: number): Region => ({
    latitude: lat,
    longitude: lon,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005
  })

  const handleLocationChange = (e: EventUserLocation) => {
    if(followUser) {
      setRegion(createRegion(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude))
    }
  }

  const handlePanDrag = () => {
    setFollowUser(false);
  }

  const handleSave = () => {
    setVehicle({
      coordinate: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      },
      title: "Vehiculo",
      description: "description",
      draggable: true
    } as MarkerProps)
  }

  const handleDelete = () => {
    setVehicle(null);
    setOptionsVisible(false);
  }

  return (
    <>
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={createRegion(location.coords.latitude, location.coords.longitude)}
          region={region}
          loadingEnabled={!location}
          onUserLocationChange={handleLocationChange}
          onPanDrag={handlePanDrag}
          scrollEnabled={true}
          rotateEnabled={true}
          toolbarEnabled={true}
          zoomEnabled={true}
          followsUserLocation={followUser}
          showsMyLocationButton={false}
          showsUserLocation={true}
          showsScale={true}
          customMapStyle= {colorScheme === 'dark' ? darkMap : []}
        >
          {vehicle && <Marker {...vehicle} onPress={() => setOptionsVisible(true)}/>}
        </MapView>
        <Button status='basic' appearance='ghost'
          accessoryLeft={CenterIcon}
          style={[styles.showLocation, {backgroundColor: theme['background-basic-color-3']}]}
          onPress={() => setFollowUser(true)}
        />
      </View>
      {!vehicle && <Button
        accessoryLeft={SaveIcon}
        style={{borderRadius: 0}}
        onPress={handleSave}
      >Guardar
      </Button>}
      {vehicle && optionsVisible && <Button
        accessoryLeft={DeleteIcon}
        style={{borderRadius: 0}}
        onPress={handleDelete}
      >Eliminar
      </Button>}
    </>
  );
};

const CenterIcon = (props: IconProps): JSX.Element => (
  <Icon {...props} name='navigation-outline'/>
)

const SaveIcon = (props: IconProps): JSX.Element => (
  <Icon {...props} name='pin-outline'/>
)

const DeleteIcon = (props: IconProps): JSX.Element => (
  <Icon {...props} name='trash-2-outline'/>
)

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  showLocation: {
    position: 'absolute',
    top: 10,
    right: 5,
    height: 50,
    width: 50,
    borderRadius: 60,
    opacity: 0.85
  },
  markerMenu: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 999
  }
});
