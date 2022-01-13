const DB_NAME = 'ow-stats';
const DB_VERSION = 1;

let database;

const dbCreate = () => {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open(DB_NAME, DB_VERSION);
    dbRequest.onerror = reject;

    dbRequest.onupgradeneeded = event => {
      database = event.target.result;

      // Here we are going to create all stores / collections.
      database.createObjectStore('games', { keyPath: 'id' }); // keyPath defines a property of the object as the id property.
    }

    dbRequest.onsuccess = event => {
      database = event.target.result;
      resolve(database);
    }
  })
}

const dbWrite = (storeName, object) => {
  const transaction = database.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);
  store.add(object);
}

const dbRead = (storeName) => {
  const transaction = database.transaction(storeName, 'readonly');
  const store = transaction.objectStore(storeName);
  const readRequest = store.openCursor();

  readRequest.onsuccess = event => {
    const cursor = event.target.result;
    if(cursor) {
      console.log('Cursor', cursor);
      cursor.continue();
    }
  }
}

export { dbCreate, dbWrite, dbRead };
