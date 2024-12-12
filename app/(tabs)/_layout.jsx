import { Image, Text, View, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.tabIconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.icon, { tintColor: color }]}
      />
      <Text
        style={[
          styles.label,
          { color: color, fontWeight: focused ? "600" : "400" },
        ]}
        numberOfLines={1} // Prevents wrapping
        ellipsizeMode="tail" // Adds "..." if the text overflows
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E11D48", // Highlighted tab color
        tabBarInactiveTintColor: "#CDCDE0", // Inactive tab color
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0D1117",
          borderTopWidth: 1,
          borderTopColor: "#1F2937",
          height: 70, // Reduced height for precise alignment
          paddingBottom: 10, // Padding to prevent peeking
          paddingTop: 10, // Padding to center icons
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 70, // Fixed width to prevent wrapping
    height: 60, // Ensure proper spacing for alignment
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 2, // Adjust margin between icon and label
  },
  label: {
    fontSize: 12, // Prevents overflow
    textAlign: "center", // Center-align the text
  },
});

export default TabLayout;
