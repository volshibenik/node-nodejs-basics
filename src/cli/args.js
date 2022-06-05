export const parseArgs = () => {
    const args = process.argv.slice(2);
    let output = [];

    for (let index = 0; index < args.length; index+=2) {
        const key = args[index].slice(2);
        const value = args[index + 1];
        output = [...output, `${key} is ${value}`];
    }

    console.log(output.join(', '));
};

parseArgs();