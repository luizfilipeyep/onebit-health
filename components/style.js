import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxTitle: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textTitle: {
    color: "#ff0043",
    fontSize: 24,
    fontWeight: "bold",
  },
  formContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 30,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    height: 40,
    backgroundColor: "#f6f6f6",
    borderRadius: 50,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#fff",
  },
  result: {
    textAlign: "center",
    marginTop: 10,
  },
  resultText: {
    textAlign: "center",
    color: "#ff0043",
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default styles