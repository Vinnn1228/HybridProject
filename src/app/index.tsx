import { Palette } from "@/app/palette";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();
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
        "Account created for " + cleanUsername + "! Please sign in.",
      );
      setIsSignUp(false);
      setPassword("");
    } else {
      setSuccessMessage("Welcome back, " + cleanUsername + "!");
      setTimeout(() => {
        router.replace("/");
      }, 700);
    }
  };

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Palette.cream} />
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header Accent & Title */}
          <View style={styles.header}>
            <View style={styles.badge}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>ACCOUNT</Text>
            </View>
            <Text style={styles.title}>
              {isSignUp ? "Create Account" : "Welcome Back"}
            </Text>
            <Text style={styles.subtitle}>
              {isSignUp
                ? "Sign up with your username and password."
                : "Enter your credentials to continue."}
            </Text>
          </View>

          {/* Mode Switcher Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.tab, !isSignUp && styles.tabActive]}
              onPress={() => {
                setIsSignUp(false);
                setErrorMessage("");
                setSuccessMessage("");
              }}
            >
              <Text style={[styles.tabText, !isSignUp && styles.tabTextActive]}>
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.tab, isSignUp && styles.tabActive]}
              onPress={() => {
                setIsSignUp(true);
                setErrorMessage("");
                setSuccessMessage("");
              }}
            >
              <Text style={[styles.tabText, isSignUp && styles.tabTextActive]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form Card */}
          <View style={styles.card}>
            {errorMessage ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>{errorMessage}</Text>
              </View>
            ) : null}

            {successMessage ? (
              <View style={styles.successBox}>
                <Text style={styles.successText}>{successMessage}</Text>
              </View>
            ) : null}

            {/* Username Field */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. alexander"
                  placeholderTextColor={Palette.mutedOlive}
                  value={username}
                  onChangeText={(text) => {
                    setUsername(text);
                    if (errorMessage) setErrorMessage("");
                  }}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                />
              </View>
            </View>

            {/* Password Field */}
            <View style={styles.inputGroup}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Password</Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setShowPassword((prev) => !prev)}
                >
                  <Text style={styles.showHideText}>
                    {showPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor={Palette.mutedOlive}
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
                />
              </View>
            </View>

            {/* Submit Action */}
            <TouchableOpacity
              style={styles.primaryButton}
              activeOpacity={0.88}
              onPress={handleSubmit}
            >
              <Text style={styles.primaryButtonText}>
                {isSignUp ? "Create My Account" : "Sign In"}
              </Text>
            </TouchableOpacity>

            {/* Switch Mode Prompt */}
            <View style={styles.switchRow}>
              <Text style={styles.switchPromptText}>
                {isSignUp
                  ? "Already have an account? "
                  : "Don't have an account? "}
              </Text>
              <TouchableOpacity activeOpacity={0.7} onPress={toggleMode}>
                <Text style={styles.switchActionText}>
                  {isSignUp ? "Sign In" : "Sign Up"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer Back Link */}
          <View style={styles.footer}>
            <Link href="/" style={{ cursor: "pointer" }}>
              <Text style={styles.skipText}>← Return to Home</Text>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Palette.cream,
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 36,
    maxWidth: 440,
    width: "100%",
    alignSelf: "center",
  },
  header: {
    marginBottom: 28,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Palette.surfaceSubtle,
    borderWidth: 1,
    borderColor: Palette.sageGreen,
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginBottom: 14,
    gap: 6,
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: Palette.copper,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: Palette.darkGreen,
    letterSpacing: 1.2,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: Palette.darkGreen,
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: Palette.mutedOlive,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 12,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: Palette.surfaceSubtle,
    borderRadius: 14,
    padding: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Palette.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  tabActive: {
    backgroundColor: Palette.surface,
    shadowColor: Palette.darkGreen,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: Palette.mutedOlive,
  },
  tabTextActive: {
    color: Palette.darkGreen,
    fontWeight: "700",
  },
  card: {
    backgroundColor: Palette.surface,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: Palette.border,
    shadowColor: Palette.darkGreen,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
  },
  errorBox: {
    backgroundColor: "#FDF2F2",
    borderWidth: 1,
    borderColor: "#F8B4B4",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  errorText: {
    color: Palette.error,
    fontSize: 13,
    fontWeight: "500",
  },
  successBox: {
    backgroundColor: Palette.surfaceSubtle,
    borderWidth: 1,
    borderColor: Palette.mossGreen,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  successText: {
    color: Palette.darkGreen,
    fontSize: 13,
    fontWeight: "600",
  },
  inputGroup: {
    marginBottom: 18,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: Palette.darkGreen,
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  showHideText: {
    fontSize: 12,
    fontWeight: "600",
    color: Palette.mossGreen,
    marginBottom: 8,
  },
  inputWrapper: {
    borderWidth: 1.5,
    borderColor: Palette.border,
    borderRadius: 12,
    backgroundColor: Palette.cream,
    paddingHorizontal: 14,
  },
  input: {
    height: 48,
    fontSize: 15,
    color: Palette.darkGreen,
  },
  primaryButton: {
    backgroundColor: Palette.copper,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 18,
    shadowColor: Palette.copper,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  switchPromptText: {
    fontSize: 13,
    color: Palette.mutedOlive,
  },
  switchActionText: {
    fontSize: 13,
    fontWeight: "700",
    color: Palette.copper,
  },
  footer: {
    marginTop: 24,
    alignItems: "center",
  },
  skipText: {
    fontSize: 13,
    fontWeight: "600",
    color: Palette.mutedOlive,
  },
});
