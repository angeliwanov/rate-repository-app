import { FlatList, Pressable, View } from "react-native";
import { useNavigate } from "react-router-dom";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import SearchBar from "./SearchBar";
import Selector from "./Selector";

const RepositoryListContainer = ({
  repositories,
  selector,
  setSelector,
  searchQuery,
  setSearchQuery,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const navigate = useNavigate();
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigate(`/${item.id}`);
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
      ListHeaderComponent={() => (
        <View>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Selector selector={selector} setSelector={setSelector} />
        </View>
      )}
    />
  );
};

export default RepositoryListContainer;
