import { AlertBox } from "@/components/AlertBox";
import { CustomInput } from "@/components/CustomInput";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Palette } from "@/constants/palette";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = () => {
    setErrorMessage("");
    setSuccessMessage("");
    const cleanUsername = username.trim();

    if (!cleanUsername || !password) {
      setErrorMessage("Please fill in both username and password.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    if (isSignUp) {
      setSuccessMessage(
        `Account created for ${cleanUsername}! Please sign in.`,
      );
      setIsSignUp(false);
      setPassword("");
    } else {
      setSuccessMessage(`Welcome back, ${cleanUsername}!`);
      setTimeout(() => {
        router.replace("/(tabs)");
      }, 700);
    }
  };

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerClassName="grow justify-center px-6 py-9 max-w-[440px] w-full self-center"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
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

          <View className="flex-row bg-surfaceSubtle rounded-[14px] p-1 mb-5 border border-border">
            <TouchableOpacity
              activeOpacity={0.8}
              className={`flex-1 py-2.5 items-center rounded-[10px] ${!isSignUp ? "bg-surface shadow-sm" : ""}`}
              onPress={() => {
                setIsSignUp(false);
                setErrorMessage("");
                setSuccessMessage("");
              }}
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
              onPress={() => {
                setIsSignUp(true);
                setErrorMessage("");
                setSuccessMessage("");
              }}
            >
              <Text
                className={`text-sm ${isSignUp ? "text-darkGreen font-bold" : "text-mutedOlive font-semibold"}`}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View className="bg-surface rounded-[24px] p-6 border border-border shadow-sm">
            <AlertBox type="error" message={errorMessage} />
            <AlertBox type="success" message={successMessage} />

            <CustomInput
              label="Username"
              placeholder="Enter your username"
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                if (errorMessage) setErrorMessage("");
              }}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />

            <CustomInput
              label="Password"
              placeholder={
                isSignUp ? "Create a password" : "Enter your password"
              }
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (errorMessage) setErrorMessage("");
              }}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={handleSubmit}
              rightIcon={
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setShowPassword((prev) => !prev)}
                  className="p-1"
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={18}
                    color={Palette.mutedOlive}
                  />
                </TouchableOpacity>
              }
            />

            {!isSignUp ? (
              <View className="items-end mb-5">
                <Link href="/" asChild></Link>
              </View>
            ) : (
              <View className="mb-5" />
            )}

            <PrimaryButton
              title={isSignUp ? "Create Account" : "Sign In"}
              onPress={handleSubmit}
            />

            <View className="flex-row items-center justify-center gap-2 mt-1">
              <Text className="text-sm text-mutedOlive">
                {isSignUp ? "Already have an account?" : "Need an account?"}
              </Text>
              <TouchableOpacity activeOpacity={0.7} onPress={toggleMode}>
                <Text className="text-sm font-bold text-copper">
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
