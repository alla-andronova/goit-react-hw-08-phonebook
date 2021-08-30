import { createSelector } from "@reduxjs/toolkit";

export const getLogIn = (state) => state.auth.isLoggedIn;

export const getUserName = (state) => state.auth.user.name;

export const getIsFetchingCurrentUser = (state) =>
  state.auth.isFetchingCurrentUser;

export const getFilter = (state) => state.filter;
export const getContacts = (state) => state.contacts.items;

export const getFilteredContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    const result = normalizedFilter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : contacts;
    return result;
  }
);
