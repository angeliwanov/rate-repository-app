import { Image, View } from "react-native";
import theme from "../theme";
import { numberFormatter } from "../utils";
import Text from "./Text";
const RepositoryItem = ({
  fullName,
  description,
  language,
  stars,
  forks,
  reviews,
  rating,
  image,
}) => {
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 5 }}
          source={{ uri: image }}
        />
        <View style={{ display: "flex", gap: 5, width: 250 }}>
          <Text fontWeight="bold">{fullName}</Text>
          <Text style={{ color: "grey" }}>{description}</Text>
          <Text
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.secondary,
              padding: 5,
              width: 100,
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            {language}
          </Text>
        </View>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text fontWeight="bold">{numberFormatter(stars)}</Text>
          <Text style={{ color: "grey" }}>Stars</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text fontWeight="bold">{numberFormatter(forks)}</Text>
          <Text style={{ color: "grey" }}>Forks</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text fontWeight="bold">{numberFormatter(reviews)}</Text>
          <Text style={{ color: "grey" }}>Reviews</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text fontWeight="bold">{numberFormatter(rating)}</Text>
          <Text style={{ color: "grey" }}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
