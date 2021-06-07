import {StyleSheet, View} from "react-native";
import React from "react";
import MapView, {EventUserLocation, Marker, MarkerProps, Region} from "react-native-maps";
import useLocation from "../hooks/useLocation";
import {Button, Icon} from "@ui-kitten/components";
import {IconProps} from "@ui-kitten/components/ui/icon/icon.component";
import darkMap from "../theme/darkMap";
import useColorScheme from "../hooks/useColorScheme";

const Map = (): JSX.Element | null => {
  const colorScheme = useColorScheme();
  const {location} = useLocation();
  const [region, setRegion] = React.useState<Region>()
  const [followUser, setFollowUser] = React.useState<boolean>(true)
  const [showOptions, setShowOptions] = React.useState<boolean>(false)
  const [marker, setMarker] = React.useState<MarkerProps | null>(null)

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
    setMarker({
      coordinate: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      },
      title: "Mi Vehiculo",
      draggable: true
    } as MarkerProps)
  }

  const handleDelete = () => {
    setMarker(null);
  }

  const handleShowMarker = () => {
    if(marker?.coordinate){
      setFollowUser(false);
      setRegion(createRegion(
        Number(marker.coordinate.latitude),
        Number(marker.coordinate.longitude)
      ))
    }
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
          toolbarEnabled={false}
          zoomEnabled={true}
          followsUserLocation={followUser}
          showsMyLocationButton={false}
          showsUserLocation={true}
          showsScale={true}
          customMapStyle= {colorScheme === 'dark' ? darkMap : []}
          onPress={() => setShowOptions(false)}
        >
          {marker && <Marker {...marker}
            onPress={() => setShowOptions(true)}
          />}
        </MapView>
        <Button status='primary'
          accessoryLeft={UserIcon}
          style={styles.showUser}
          onPress={() => setFollowUser(true)}
        />
        {marker && <Button status='primary'
          accessoryLeft={PinIcon}
          style={styles.showMarker}
          onPress={handleShowMarker}
        />}
      </View>
      {!marker && <Button
        accessoryLeft={PinIcon}
        style={{borderRadius: 0}}
        onPress={handleSave}
      >Guardar
      </Button>}
      {marker && showOptions &&
        <Button
          accessoryLeft={DeleteIcon}
          style={styles.deleteMarker}
          onPress={handleDelete}
        />}
    </>
  );
};

const UserIcon = (props: IconProps): JSX.Element => (
  <Icon {...props} name='person-outline'/>
)

const PinIcon = (props: IconProps): JSX.Element => (
  <Icon {...props} name='pin-outline'/>
)

const DeleteIcon = (props: IconProps): JSX.Element => (
  <Icon {...props} name='trash-2-outline'/>
)

export default Map;

const roundBtn = {
  height: 50,
  width: 50,
  borderRadius: 60,
  opacity: 0.85
}

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
  showUser: {
    position: 'absolute',
    top: 15,
    right: 5,
    ...roundBtn
  },
  showMarker: {
    position: 'absolute',
    bottom: 10,
    right: 5,
    ...roundBtn
  },
  deleteMarker: {
    position: 'absolute',
    bottom: 10,
    left: 5,
    ...roundBtn
  },
  markerMenu: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 999
  }
});
