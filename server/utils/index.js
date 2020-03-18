
const uniqueID = () => `_${Math.random().toString(36).substr(2, 9)}`;

const timestampToISO = (timestamp) => new Date(timestamp).toISOString();

module.exports = {
  uniqueID,
  timestampToISO,
};
