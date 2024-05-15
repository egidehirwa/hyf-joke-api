import dom from "../dom.js";

const createJoke = (jokeData) => {
    // Create container
    const container = document.createElement('div');
    container.classList.add('container');
    container.id = 'container';

    // Create category
    const category = document.createElement('p');
    category.classList.add('category');
    category.id = 'category';
    category.innerText = jokeData.category;

    // Create type
    const type = document.createElement('p');
    type.classList.add('type');
    type.id = jokeData.id;
    type.innerText = jokeData.type;

    container.append(category, type);

    // Check type - if single or twopart
    if(jokeData.type === 'twopart') {
        const setup = document.createElement('p');
        setup.classList.add('setup');
        setup.id = 'setup';
        setup.innerText = jokeData.setup;

        const delivery = document.createElement('p');
        delivery.classList.add('delivery');
        delivery.id = 'delivery';
        delivery.innerText = jokeData.delivery;

        container.append(setup, delivery);
    } else {
        const joke = document.createElement('p');
        joke.classList.add('joke');
        joke.id = 'joke';
        joke.innerText = jokeData.joke;

        container.append(joke);
    }

    // Create Flags
    const flags = document.createElement('ul');
    flags.id = 'flags';
    flags.classList.add('flags');

    for (const flag in jokeData.flags){
        const li = document.createElement('li');
        li.className = jokeData.flags[flag];
        li.classList.add('flag');
        li.innerText = flag;

        // flag.append(li);
        flags.append(li);
    }


    //Create lang
    const lang = document.createElement('p');
    lang.classList.add('lang');
    lang.innerText = jokeData.lang;

    // Create safe
    const safe = document.createElement('p');
    safe.id = 'safe';
    safe.innerText = 'Safe';

    if (jokeData.safe){
        safe.classList.add('safe');
    } else {
        safe.classList.add('unsafe');
    }

    container.append(flags, lang, safe);
    return container;

}

export default createJoke;