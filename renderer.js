const Realm = require("realm");
// const app = new Realm.App({ id: "<Your App ID>" }); // create a new instance of the Realm.App
const app = new Realm.App({ id: "electron-tester-qokcs" }); // create a new instance of the Realm.App

async function run() {

  // login with an anonymous credential
  await app.logIn(new Realm.Credentials.anonymous());

  const DogSchema = {
      name: "Dog",
      properties: {
        _id: 'int',
        name: "string",
        age: "int",
      },
      primaryKey: '_id'
  };

  const realm = await Realm.open({
    schema: [DogSchema],
    sync: {
      user: app.currentUser,
      partitionValue: "myPartition",
    },
  });

  // The myPartition realm is now synced to the device. You can
  // access it through the `realm` object returned by `Realm.open()`
}
run().catch(err => {
  console.error("Failed to open realm:", err)
});