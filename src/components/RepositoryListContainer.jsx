import React from "react";
import { FlatList, Pressable, View } from "react-native";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import SearchBar from "./SearchBar";
import Selector from "./Selector";

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    return (
      <View>
        <SearchBar
          searchQuery={this.props.searchQuery}
          setSearchQuery={this.props.setSearchQuery}
        />
        <Selector
          selector={this.props.selector}
          setSelector={this.props.setSelector}
        />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={
          this.props.repositories
            ? this.props.repositories.edges.map((edge) => edge.node)
            : []
        }
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              this.props.navigate(`/${item.id}`);
            }}
          >
            <RepositoryItem
              fullName={item.fullName}
              description={item.description}
              language={item.language}
              stars={item.stargazersCount}
              forks={item.forksCount}
              reviews={item.reviewCount}
              rating={item.ratingAverage}
              image={item.ownerAvatarUrl}
            />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

export default RepositoryListContainer;
