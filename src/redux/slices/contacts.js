import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts, postContact, delContact } from "../services";

export const git fetchAllContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async () => {
    const response = await fetchContacts();

    return response;
  }
);

export const createContact = createAsyncThunk(
  "contacts/createContact",
  async (contact) => {
    const response = await postContact(contact);

    return response;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    await delContact(contactId);

    return contactId;
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchAllContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = null;
      state.error = null;
    },
    [fetchAllContacts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllContacts.rejected]: (state, action) => {
      state.status = null;
      state.error = "error";
    },

    [createContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.status = null;
      state.error = null;
    },
    [createContact.pending]: (state, action) => {
      state.status = "loading";
      state.error = "error";
    },
    [createContact.rejected]: (state, action) => {
      state.status = null;
      state.error = "error";
    },

    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter((contact) => {
        console.log("payload", action.payload, contact.id);
        return contact.id !== action.payload;
      });
      state.status = null;
      state.error = null;
    },
    [deleteContact.pending]: (state, action) => {
      state.status = "loading";
      state.error = "error";
    },
    [deleteContact.rejected]: (state, action) => {
      state.status = null;
      state.error = "error";
    },
  },
});

export default contactsSlice.reducer;
