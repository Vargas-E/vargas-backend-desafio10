const generateInfoError = (data, schema) => {
  let message = "Incomplete or invalid data. Required data: ";
  console.log("User Schema Fields:");
  const keys = Object.keys(data);
  console.log("keys:", keys);
  let schemaItems = {};
  schema.eachPath(
    (pathName, schemaType) => (schemaItems[pathName] = schemaType.instance)
  );
  console.log("schemaItems:", schemaItems);
  Object.keys(schemaItems).forEach((e) => {
    if (e != "_id" && e != "__v") {
      console.log("data[e}:", data[e]);
      message += `${e}: ${schemaItems[e]}, recieved: ${data[
        e
      ]?.toString()} || `;
    }
  });
  return message;
};

module.exports = {
  generateInfoError,
};
