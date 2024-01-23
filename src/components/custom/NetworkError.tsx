import { View, StyleSheet } from 'react-native';
import { colors } from '@utils';
import { CustomModal } from './CustomModal';
import { IconWifi } from '@assets';
import { useNetInfo } from '@react-native-community/netinfo';

const NetworkError = () => {
  const netInfo = useNetInfo();

  return (
    <CustomModal visible={netInfo.isConnected == false}>
      <View style={styles.background}>
        <IconWifi />
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
});

export { NetworkError };
