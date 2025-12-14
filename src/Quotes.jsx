export default async function Quotefetch() { 
    try {
    // const apiKey = import.meta.process.env.VITE_API_KEY;
    // console.log(apiKey)
    const url = "https://api.api-ninjas.com/v2/randomquotes?categories=education"; 
    const res = await fetch(url, {
      headers: {
        "X-Api-Key": "mppiAAWanC1d22tbzVrOnA==938SHgWrGl6FOfSK",
      },
    });

    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    if (data.length === 0) return null;
        console.log(data)


    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex]; 
  } catch (error) {
    console.error("Failed to fetch quote:", error);
    return null;
  }
}
