import { Colors } from "@/constants";
import { Note } from "@/modules/notes/models/notes_model";
import { Fonts } from "@/styles/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../home.styles";

interface NoteItemProps {
  note: Note;
  onDeleteNote: (id: number) => void;
}

const NoteItem = (props: NoteItemProps) => {
  const router = useRouter();

  function navigateToAddNotes(id: number) {
    router.push(`/notes/AddNotes?id=${id}`);
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigateToAddNotes(props.note.id)}
    >
      <View style={[styles.noteItemRoot]}>
        <View style={{ justifyContent: "center" }}>
          <View style={styles.verticalBorder}></View>
        </View>
        <View style={styles.noteText}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[Fonts.h3, { paddingTop: 12, fontWeight: "700" }]}>
              {props.note.title}
            </Text>
            <TouchableOpacity onPress={() => props.onDeleteNote(props.note.id)}>
              <MaterialCommunityIcons
                name="delete-empty-outline"
                size={20}
                color={Colors.error}
                style={{ alignSelf: "center", paddingTop: 6 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={[Fonts.body]}>{props.note.content.slice(0, 60)}...</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NoteItem;
