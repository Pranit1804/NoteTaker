import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const ArrowDown = () => {
  return (
    // Place this above your FloatingButton in the render
    <View style={{ position: "absolute", bottom: 70, right: 30 }}>
      <Svg width={60} height={60} viewBox="0 0 60 60">
        <Path
          d="M10 10 Q55 10 55 55"
          stroke="#888"
          strokeWidth={4}
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <Path
          d="M55 55 L50 50 M55 55 L60 50"
          stroke="#888"
          strokeWidth={4}
          fill="none"
        />
      </Svg>
    </View>
  );
};

export default ArrowDown;
