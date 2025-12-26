import FloatingButton from "@/components/FloatingButton";
import { Colors } from "@/constants";
import { AppConstants } from "@/constants/AppConstants";
import { getUsername } from "@/modules/auth/services/auth.service";
import { HomeConstant } from "@/modules/home/home_constants";
import {
  deleteNoteByIdThunk,
  fetchNotesThunk,
} from "@/modules/notes/store/notesThunks";
import { useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store/store";
import { Fonts } from "@/styles/fonts";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import NoteItem from "./components/NoteItem";
import { styles } from "./home.styles";

export const Index = () => {
  const username = getUsername();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { notes, loading } = useSelector((state: RootState) => state.note);
  let renderBody;

  useEffect(() => {
    getAllNotes();
  }, [router, notes]);

  function getAllNotes() {
    dispatch(fetchNotesThunk());
  }

  function navigateToAddNotes() {
    router.push("/notes/AddNotes");
  }

  function onDeleteNote(id: number) {
    dispatch(deleteNoteByIdThunk(id));
  }

  return (
    <View style={styles.root}>
      <Text style={Fonts.h1}>
        {AppConstants.welcome}, {username}
      </Text>
      <Text
        style={[Fonts.label, { color: Colors.textLight, paddingBottom: 34 }]}
      >
        {HomeConstant.homeSubtitle}
      </Text>
      {notes && notes.length > 0 ? (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <NoteItem note={item} onDeleteNote={onDeleteNote} />
          )}
        />
      ) : (
        <Text
          style={[
            Fonts.body,
            {
              textAlign: "center",
              color: Colors.textLight,
              paddingHorizontal: 12,
              paddingTop: 180,
            },
          ]}
        >
          {HomeConstant.emptyNoteText}
        </Text>
      )}
      <View style={{ position: "absolute", bottom: 10, right: 6 }}>
        <FloatingButton icon="add" onPress={navigateToAddNotes} />
      </View>
    </View>
  );
};

export default Index;
