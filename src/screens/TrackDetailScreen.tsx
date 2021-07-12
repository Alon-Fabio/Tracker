import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { NavigationProp   } from "react-navigation";

// import { NavigationStackScreenComponent  } from 'react-navigation-stack';

// interface NAV {
//   navigation: NavigationStackScreenComponent<NavigationProp<string>>
// }
import { NavigationScreenProp } from "react-navigation";

interface Params {
  otherId: string;
  otherName: string;
  otherPic: string;
  id: string;
}

interface NAV {
  navagation: NavigationScreenProp<{
    otherId: string;
    otherName: string;
    otherPic: string;
    id: string;
  }>;
}
const TrackDetailScreen = ({
  navigation,
}: {
  navigation: NavigationScreenProp<Params>;
}) => {
  const _id = navigation.getParam("_id");
  return (
    <View>
      <Text style={styles.fontSize}>Track Detail Screen</Text>
    </View>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 48,
  },
});
