const ip = async () => {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    const dataApi = await response.json();
    console.log(dataApi);
  } catch (error) {
    console.log(error);
  }
};
export default ip;
