import React from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";

export default function MusicList() {
  const songList = [
    {
      id: 1,
      image: {
        uri: "https://i.scdn.co/image/ab67616d0000b27319f16592da6f918a04ef6b7c",
      },
      title: "Sining (feat. Jay R)",
      artist: "Dionela, Jay R",
    },
    {
      id: 2,
      image: {
        uri: "https://i.scdn.co/image/ab67616d0000b273aa23e019734fd2eaeab2425e",
      },
      title: "Dilaw",
      artist: "Maki",
    },
    {
      id: 3,
      image: {
        uri: "https://i.scdn.co/image/ab67616d0000b273802c8fee6eb6692b08b204a4",
      },
      title: "Misteryoso",
      artist: "Cup of Joe",
    },
    {
      id: 4,
      image: {
        uri: "https://i.scdn.co/image/ab67616d00001e025db8096cbf5af6d09ade9502",
      },
      title: "Museo",
      artist: "Eliza Maturan",
    },
    {
      id: 5,
      image: {
        uri: "https://i.scdn.co/image/ab67616d00001e025db8096cbf5af6d09ade9502",
      },
      title: "Nilalang",
      artist: "Dilaw",
    },
    {
      id: 6,
      image: {
        uri: "https://i.scdn.co/image/ab67616d0000b27369ac8bd178f337d697ed408b",
      },
      title: "Museo",
      artist: "Eliza Maturan",
    },
    {
      id: 7,
      image: {
        uri: "https://i.scdn.co/image/ab67616d00001e02ac6b03346013046ad184318a",
      },
      title: "Palagi",
      artist: "TJ Monterde",
    },
    {
      id: 8,
      image: {
        uri: "https://i.scdn.co/image/ab67616d0000b273ec9d30ea1ea6aad417a0cb6e",
      },
      title: "Sandali",
      artist: "mrld",
    },
    {
      id: 9,
      image: {
        uri: "https://i.scdn.co/image/ab67616d0000b273ed2d090791dca7645c42bc51",
      },
      title: "Oksihina",
      artist: "Dionela",
    },
    {
      id: 10,
      image: {
        uri: "https://i.scdn.co/image/ab67616d00001e02858f1ee7804bc24ba392a63b",
      },
      title: "Sariling Mundp",
      artist: "TJ Monterde",
    },
    {
      id: 11,
      image: {
        uri: "https://i.scdn.co/image/ab67616d0000b273b13cedfd0561ede2aaaa0947",
      },
      title: "Mundo",
      artist: "IV of Spades",
    },
    {
      id: 12,
      image: {
        uri: "https://i.scdn.co/image/ab67616d0000b2738fa56b6692f1723685815034",
      },
      title: "Kung 'Di Rin Lang Ikaw",
      artist: "December Avenue, Moira Dela Torre",
    },
    {
      id: 13,
      image: {
        uri: "https://i.scdn.co/image/ab67616d0000b2735e4e59248d4e736c5b09987e",
      },
      title: "Tadhana",
      artist: "Up Dharma Down",
    },
  ];

  return (
    <FlatList
      data={songList}
      style={{ backgroundColor: "#226F54" }}
      renderItem={({ item }) => (
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <Image
                source={{ uri: item.image.uri }}
                style={{ width: 60, height: 60, margin: 10 }}
              />
              <View>
                <Text
                  style={{ fontWeight: "bold", color: "#FFF", fontSize: 17 }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: "#E1D9D1" }}>{item.artist}</Text>
              </View>
            </View>
            <Image
              source={require("../../assets/more-vertical.png")}
              style={{ width: 30, height: 30, marginRight: 5 }}
            />
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
