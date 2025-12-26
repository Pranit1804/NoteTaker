import CustomTextInput from "@/components/CustomTextInput";
import PrimaryButton from "@/components/PrimaryButton";
import { Colors } from "@/constants";
import { AppConstants } from "@/constants/AppConstants";
import { PngConstants } from "@/constants/PngConstants";
import { AuthConstants } from "@/modules/auth/auth.constants";
import { setUserName } from "@/store/user-store";
import { Fonts } from "@/styles/fonts";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./auth.styles";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState(true);

  function onTextChange(text: string) {
    setUsername(text);
  }

  function onSubmit() {
    if (username === "") {
      setIsValid(false);
      return;
    }
    dispatch(setUserName(username));
    router.push("/home");
  }

  let errorState;
  if (!isValid) {
    errorState = (
      <Text style={[Fonts.body, { color: Colors.error, paddingTop: 4 }]}>
        {" "}
        Please enter username
      </Text>
    );
  }

  return (
    <View style={styles.loginRoot}>
      <Image source={PngConstants.stickyNotes} style={styles.loginImage} />
      <Text style={[Fonts.h2, styles.loginText]}>
        {AuthConstants.loginTitle}
      </Text>
      <Text style={[Fonts.body, styles.loginSubtitle]}>
        {AuthConstants.loginSubtitle}
      </Text>
      <CustomTextInput
        placeholder={AuthConstants.usernamePlaceholder}
        placeholderTextColor={Colors.textLight}
        onChangeText={onTextChange}
      />
      {errorState}
      <PrimaryButton
        title={AppConstants.confirm}
        onPress={onSubmit}
        style={{ marginTop: 30, alignSelf: "center" }}
      />
    </View>
  );
};

export default LoginScreen;
