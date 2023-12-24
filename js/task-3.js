//====================================================================
const sortByDescendingFriendCount = users =>
  users.toSorted((less, more) => more.friends.length - less.friends.length);
//====================================================================
