db = db.getSiblingDB('SmartNote');

db.createUser({
  user: 'smartNote',
  pwd: 'SmartNote123!',
  roles: [
    { role: 'readWrite', db: 'SmartNote' },
  ],
});