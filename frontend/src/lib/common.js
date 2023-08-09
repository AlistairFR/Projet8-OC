import axios from 'axios';

export function formatObject(objectArray) {
    return objectArray.map((object) => {
      const newObject = { ...object };
      newObject.id = newObject._id;
      return newObject;
    });
}

export async function getSkills() {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:4000/skills',
      });
      console.log("getSkills DATA");
      console.log(response.data);
      const skills = formatObject(response.data);
      return skills;
    } catch (err) {
      console.error(err);
      return [];
    }
}