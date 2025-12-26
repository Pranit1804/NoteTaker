import FloatingButton from "@/components/FloatingButton";
import NoBorderTextInput, {
  TextInputType,
} from "@/components/NoBorderTextInput";
import { Colors } from "@/constants";
import { Note } from "@/modules/notes/models/notes_model";
import { NotesConstants } from "@/modules/notes/notes.constants";
import {
  addNoteThunk,
  getNoteByIdThunk,
  updateNoteById,
} from "@/modules/notes/store/notesThunks";
import { useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store/store";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./notes.styles";

export const AddNotes = () => {
  const { id } = useLocalSearchParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();
  const { loading, note } = useSelector((root: RootState) => root.note);
  const router = useRouter();

  function onTitleTextChange(text: string) {
    setTitle(text);
  }

  function onContentChange(text: string) {
    setContent(text);
  }

  useLayoutEffect(() => {
    if (id) {
      dispatch(getNoteByIdThunk(Number.parseInt(id as string)));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (id && note) {
      setTitle(note.title ?? "");
      setContent(note.content ?? "");
    }
  }, [note]);

  const handleSave = () => {
    const newNote: Note = {
      id: 1,
      title: title,
      content: content,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    if (id) {
      dispatch(
        updateNoteById({ id: Number.parseInt(id as string), note: newNote })
      );
    } else {
      dispatch(addNoteThunk(newNote));
    }

    router.replace("/home");
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => router.replace("/home")}
        activeOpacity={0.35}
      >
        <Text
          style={{
            alignSelf: "flex-end",
            paddingRight: 12,
            fontWeight: "bold",
            fontSize: 16,
            opacity: 0.6,
            color: Colors.textLight,
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
      <View style={[styles.root, { paddingTop: 12 }]}>
        <NoBorderTextInput
          type={TextInputType.TITLE}
          style={{ paddingBottom: 4 }}
          placeholder={NotesConstants.title}
          placeholderTextColor={Colors.textLight}
          value={title}
          onChangeText={onTitleTextChange}
        />
        <NoBorderTextInput
          type={TextInputType.TEXT}
          placeholder={NotesConstants.startWriting}
          placeholderTextColor={Colors.textLight}
          value={content}
          onChangeText={onContentChange}
        />
        <FloatingButton icon="checkmark" onPress={handleSave} />
      </View>
    </View>
  );
};

export default AddNotes;
