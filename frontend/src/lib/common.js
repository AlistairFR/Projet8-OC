import axios from 'axios';

function formatObject(objectArray) {
    return objectArray.map((object) => {
      const newObject = { ...object };
      newObject.id = newObject._id;
      return newObject;
    });
}

export async function getProjects() {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:3000/',
      });
      const projects = formatObject(response.data);
      return projects;
    } catch (err) {
      console.error(err);
      return [];
    }
}

export async function getSkills() {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:3000/',
      });
      const skills = formatObject(response.data);
      return skills;
    } catch (err) {
      console.error(err);
      return [];
    }
}