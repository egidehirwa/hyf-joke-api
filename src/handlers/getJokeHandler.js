import dom from "../dom.js";
import getJoke from "../../apis/getJoke.js";
import createJoke from "../components/createJoke.js";

const getJokeHandler = async () => {
    // Joke data
    const jokeData = await getJoke();

    // Create dom components
    const jokeDom = createJoke(jokeData);

    dom.root.innerHTML = '';
    dom.root.append(jokeDom);
}

export default getJokeHandler;