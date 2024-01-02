import { s } from "./ButtonConvert.style";
import { TouchableOpacity, Text } from "react-native";


function ButtonConvert({ onPress, unit }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
}

export { ButtonConvert };
