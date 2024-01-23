import { View, StyleSheet } from 'react-native';
import { colors } from '@utils';
import { CustomModal } from './CustomModal';
import { useAppSelector } from '@redux';

const SMAlert = () => {
  const alert = useAppSelector(state => state.common.alert);

  return (
    <CustomModal visible={alert ? true : false}>
      <View style={styles.background}>
        
      </View>
    </CustomModal>
  )
};

const styles = StyleSheet.create({
  background: {
    width: 250,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
});

export { SMAlert };
