


const roleIsValid = async (role = "") => {
  const validRole = "a"; //buscar en ls DB
  if (!validRole) {
    throw new Error(`Role : ${role} doesn't exists in DB`);
  }
};

const emailIsAvailable = async (email = "") => {
    const emailAvailable = "a"; //buscar en ls DB
    if (!emailAvailable) {
      throw new Error(`Email : ${email} exists in DB`);
    }
  };

module.exports = {
  roleIsValid,
  emailIsAvailable
};
