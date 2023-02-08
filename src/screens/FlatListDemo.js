import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Top10List = () => {
    const netflixData = [
        {
            id: "1",
            name: "Archive 81",
            year: "2022",
            creator: "Rebecca",
            genre: "Horror, Thriller",
        },
        {
            id: "2",
            name: "Cheef",
            year: "2021-20220",
            creator: "Greg Whitely",
            genre: "Docuseries",
        },
        {
            id: "3",
            name: "Cobra Kai",
            year: "2018-2022",
            creator: "Hayden",
            genre: "Drama",
        },
        {
            id: "4",
            name: "The Witcher",
            year: "2020-2022",
            creator: "Lauren Schmidt",
            genre: "Reality",
        },
        {
            id: "5",
            name: "Emily in Paris",
            year: "2020",
            creator: "Darren Star",
            genre: "Romance , Drama",
        },
        {
            id: "6",
            name: "Death Note",
            year: "2021",
            creator: "Unknown",
            genre: "Horror, Thriller",
        },
    ];

    return (
        <View>
            <FlatList
                data={netflixData}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.textStyle}>
                                Name: {item.name}
                            </Text>
                            <Text style={styles.textStyle}>
                                Creator: {item.creator}
                            </Text>
                            <Text style={styles.textStyle}>
                                Year: {item.year}
                            </Text>
                            <Text style={styles.textStyle}>
                                Genre: {item.genre}
                            </Text>
                        </View>
                    );
                }}
                horizontal
                style={styles.listStyle}
                keyExtractor={(key) => {
                    return key.id;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listStyle: {
        marginTop: 50,
        // fontSize: 15,
    },
    card: {
        backgroundColor: "blue",
        margin: 10,
        padding: 10,
    },
    textStyle: {
        color: "white",
        fontSize: 20,
    },
});

export default Top10List;
