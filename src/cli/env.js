export const parseEnv = () => {
    const list = Object.entries(process.env)
        .filter(entry => entry[0].startsWith('RSS_'))
        .map(entry => `${entry[0]}=${entry[1]}`);

    console.log(list.join('; '));
};

parseEnv();