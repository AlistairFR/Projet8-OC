import axios from 'axios';

export function formatObject(objectArray) {
    return objectArray.map((object) => {
      const newObject = { ...object };
      newObject.id = newObject._id;
      return newObject;
    });
}
