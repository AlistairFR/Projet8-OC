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
        url: 'http://localhost:4000/',
      });
      console.log("getProjects DATA");
      console.log(response.data);
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
        url: 'http://localhost:4000/',
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