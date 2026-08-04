import { Text } from "react-native";

type AlertComponentProps = {
  message: string;
  type: 'error' | 'success' | 'info';
};

const AlertComponent = ({ message, type }: AlertComponentProps) => {
  const bgColor = {
    error: '#F87171',
    success: '#34D399',
    info: '#F3F4F6',
  };

  return (
    <Text style={{
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: `${bgColor[type]}`
    }}>
      {message}
    </Text>
  );
};

export default AlertComponent;
