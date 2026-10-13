import { Palette } from "@/constants/palette";
import { router } from "expo-router";
import { Component } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LoginState {
  isSignUp: boolean;
  username: string;
  password: string;
  showPassword: boolean;
  errorMessage: string;
  successMessage: string;
}

type LoginProps = Record<string, never>;

export default class LoginScreen extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      isSignUp: false,
      username: "",
      password: "",
      showPassword: false,
      errorMessage: "",
      successMessage: "",
    };
  }

  handleSubmit = () => {
    this.setState({ errorMessage: "", successMessage: "" });

    const { username, password, isSignUp } = this.state;
    const cleanUsername = username.trim();

    if (!cleanUsername || !password) {
      this.setState({
        errorMessage: "Please fill in both username and password.",
      });
      return;
    }

    if (password.length < 6) {
      this.setState({
        errorMessage: "Password must be at least 6 characters.",
      });
      return;
    }

    if (isSignUp) {
      this.setState({
        successMessage: `Account created for ${cleanUsername}! Please sign in.`,
        isSignUp: false,
        password: "",
      });
    } else {
      this.setState({ successMessage: `Welcome back, ${cleanUsername}!` });
      setTimeout(() => {
        router.replace("/");
      }, 700);
    }
  };

  toggleMode = () => {
    this.setState((prevState) => ({
      isSignUp: !prevState.isSignUp,
      errorMessage: "",
      successMessage: "",
    }));
  };

  render() {
    const {
      isSignUp,
      username,
      password,
      showPassword,
      errorMessage,
      successMessage,
    } = this.state;

    return (
      <SafeAreaView className="flex-1 bg-cream">
        <StatusBar barStyle="dark-content" backgroundColor={Palette.cream} />

        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            contentContainerClassName="grow justify-center px-6 py-9 max-w-[440px] w-full self-center"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Header Accent & Title */}
            <View className="mb-7 items-center">
              <View className="flex-row items-center bg-surfaceSubtle border border-sageGreen py-1.5 px-3.5 rounded-[20px] mb-3.5 gap-1.5">
                <View className="w-[7px] h-[7px] rounded-full bg-copper" />
                <Text className="text-[11px] font-bold text-darkGreen tracking-[1.2px]">
                  ACCOUNT
                </Text>
              </View>
              <Text className="text-[30px] font-bold text-darkGreen text-center mb-2 tracking-tight">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </Text>
              <Text className="text-sm text-mutedOlive text-center leading-5 px-3">
                {isSignUp
                  ? "Sign up with your username and password."
                  : "Enter your credentials to continue."}
              </Text>
            </View>

            {/* Mode Switcher Tabs */}
            <View className="flex-row bg-surfaceSubtle rounded-[14px] p-1 mb-5 border border-border">
              <TouchableOpacity
                activeOpacity={0.8}
                className={`flex-1 py-2.5 items-center rounded-[10px] ${!isSignUp ? "bg-surface shadow-sm" : ""}`}
                onPress={() =>
                  this.setState({
                    isSignUp: false,
                    errorMessage: "",
                    successMessage: "",
                  })
                }
              >
                <Text
                  className={`text-sm ${!isSignUp ? "text-darkGreen font-bold" : "text-mutedOlive font-semibold"}`}
                >
                  Sign In
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                className={`flex-1 py-2.5 items-center rounded-[10px] ${isSignUp ? "bg-surface shadow-sm" : ""}`}
                onPress={() =>
                  this.setState({
                    isSignUp: true,
                    errorMessage: "",
                    successMessage: "",
                  })
                }
              >
                <Text
                  className={`text-sm ${isSignUp ? "text-darkGreen font-bold" : "text-mutedOlive font-semibold"}`}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Form Card */}
            <View className="bg-surface rounded-[24px] p-6 border border-border shadow-sm">
              {errorMessage ? (
                <View className="bg-[#FDF2F2] border border-[#F8B4B4] py-2.5 px-3.5 rounded-lg mb-4">
                  <Text className="text-error text-[13px] font-medium">
                    {errorMessage}
                  </Text>
                </View>
              ) : null}

              {successMessage ? (
                <View className="bg-surfaceSubtle border border-mossGreen py-2.5 px-3.5 rounded-lg mb-4">
                  <Text className="text-darkGreen text-[13px] font-semibold">
                    {successMessage}
                  </Text>
                </View>
              ) : null}

              {/* Username Field */}
              <View className="mb-4.5">
                <Text className="text-[13px] font-semibold text-darkGreen mb-2 tracking-[0.2px]">
                  Username
                </Text>
                <View className="border-[1.5px] border-border rounded-xl bg-cream px-3.5">
                  <TextInput
                    className="h-12 text-[15px] text-darkGreen"
                    placeholder="e.g. alexander"
                    placeholderTextColor={Palette.mutedOlive}
                    value={username}
                    onChangeText={(text) =>
                      this.setState({
                        username: text,
                        errorMessage: errorMessage ? "" : errorMessage,
                      })
                    }
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                  />
                </View>
              </View>

              {/* Password Field */}
              <View className="mb-4.5">
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="text-[13px] font-semibold text-darkGreen tracking-[0.2px]">
                    Password
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                      this.setState((prev) => ({
                        showPassword: !prev.showPassword,
                      }))
                    }
                  >
                    <Text className="text-xs font-semibold text-mossGreen">
                      {showPassword ? "Hide" : "Show"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="border-[1.5px] border-border rounded-xl bg-cream px-3.5">
                  <TextInput
                    className="h-12 text-[15px] text-darkGreen"
                    placeholder="Enter your password"
                    placeholderTextColor={Palette.mutedOlive}
                    value={password}
                    onChangeText={(text) =>
                      this.setState({
                        password: text,
                        errorMessage: errorMessage ? "" : errorMessage,
                      })
                    }
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="done"
                    onSubmitEditing={this.handleSubmit}
                  />
                </View>
              </View>

              {/* Submit Action */}
              <TouchableOpacity
                className="bg-copper py-3.5 rounded-xl items-center mt-2 mb-4.5 shadow-sm"
                activeOpacity={0.88}
                onPress={this.handleSubmit}
              >
                <Text className="text-white text-[15px] font-bold tracking-[0.4px]">
                  {isSignUp ? "Create My Account" : "Sign In"}
                </Text>
              </TouchableOpacity>

              {/* Switch Mode Prompt */}
              <View className="flex-row justify-center items-center gap-1 mt-1">
                <Text className="text-[13px] text-mutedOlive">
                  {isSignUp
                    ? "Already have an account? "
                    : "Don't have an account? "}
                </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={this.toggleMode}>
                  <Text className="text-[13px] font-bold text-copper">
                    {isSignUp ? "Sign In" : "Sign Up"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
