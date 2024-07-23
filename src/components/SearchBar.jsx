import * as React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import theme from "../theme";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={{ backgroundColor: theme.backgroundColors.secondary }}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{
          borderRadius: 5,
          margin: 10,
          backgroundColor: theme.colors.secondary,
        }}
      />
    </View>
  );
};

export default SearchBar;
