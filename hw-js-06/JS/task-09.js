'use strict';

import users from './users.js';

const sortByQuantityFriends = (curr, next) =>
  curr.friends.length - next.friends.length;

const getNamesSortedByFriendsCount = users => users.sort(sortByQuantityFriends);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
