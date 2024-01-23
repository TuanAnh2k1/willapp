import { StyleSheet } from "react-native";
import { colors } from "./colors";

const theme = StyleSheet.create({
  // this container include StatusBar
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  shadow: {
    elevation: 6,
    shadowRadius: 4.65,
    shadowOpacity: 0.27,
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 3 },
  },
  BtnTextGradient: {
    backgroundColor: colors.transparent,
    color: colors.white,
    fontSize: 15,
  },
  DropdownListInput: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors._ACACAC,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    flex: 1,
    fontSize: 15,
    padding: 7
  },
  FormGroup: {
    paddingBottom: 7,
  },
  PickerInput: {
    backgroundColor: colors.white,
    borderColor: colors._D1D1D1,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    flex: 1,
    padding: 7,
    alignItems: 'center'
  },
  TextInput: {
    backgroundColor: colors.white,
    borderColor: colors._ACACAC,
    borderRadius: 5,
    borderWidth: 1,
    color: colors._1B2031,
    fontSize: 15,
    padding: 7,
  },
  TextView: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderRadius: 5,
    borderWidth: 1,
    color: colors._1B2031,
    fontSize: 15,
    padding: 7,
  },
  TimeInput: {
    backgroundColor: colors.white,
    borderColor: colors._ACACAC,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    marginRight: 5,
    padding: 7,
    width: 85,
  },
  containerTab: {
    backgroundColor: colors.white,
    flex: 1
  },
  drop: {
    width: '100%'
  },
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  fontSize14: {
    fontSize: 14
  },
  fontSize15: {
    fontSize: 15
  },
  fontSize16: {
    fontSize: 16
  },
  fontWeightBold: {
    fontWeight: 'bold'
  },
  marginLeft15: {
    marginLeft: 15
  },
  textSize14: {
    fontSize: 14
  },
  textSize15: {
    fontSize: 15
  },
  textSize16: {
    fontSize: 16
  },
  validate: {
    color: colors.primary
  }
});

export { theme };