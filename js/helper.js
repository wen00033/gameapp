export const getJson = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}(${res.status})`);
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};
