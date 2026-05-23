import { FiWifiOff } from "react-icons/fi";
import { Bar, Icon, Text } from "./OfflineBanner.styles";

export const OfflineBanner = () => {
  return (
    <Bar>
      <Icon as={FiWifiOff} />
      <Text>Sin conexión — los datos se guardarán localmente</Text>
    </Bar>
  );
};
