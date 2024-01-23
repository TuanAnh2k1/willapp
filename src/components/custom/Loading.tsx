import { View, Image, StyleSheet } from 'react-native';
import { colors } from '@utils';
import { CustomModal } from './CustomModal';
import { loading } from '@assets';

interface LoadingProps {
  isLoading: boolean;
};

const Loading = (props: LoadingProps) => {
  let { isLoading } = props;

  return (
    <CustomModal visible={isLoading}>
      <View style={styles.background}>
        <Image source={loading} style={styles.loading} />
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
  loading: {
    width: 60,
    height: 60,
  }
});

export { Loading };
