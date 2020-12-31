import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const update = async (newObject) => {
  const object = { ...newObject, votes: newObject.votes + 1 };
  // eslint-disable-next-line no-useless-escape
  const response = await axios.put(`${baseUrl}\/${newObject.id}`, object);

  return response.data;
};

export default { getAll, createNew, update };
