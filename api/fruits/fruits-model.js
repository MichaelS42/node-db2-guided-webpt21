const db = require("../../data/db-config.js");

module.exports = {
  get,
  getById,
  create,
};

async function get() {
  return await db("fruits");
}

async function getById(id) {
  return Promise.resolve("get wired");
}

async function create(data) {
  return Promise.resolver("get wired");
}
