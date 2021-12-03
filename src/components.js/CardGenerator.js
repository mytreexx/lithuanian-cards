import words from '../words';

const CardGenerator = () => {
    const randomBool = Boolean(Math.random() > 0.5);
    const randomWordsPair = words[Math.floor(Math.random() * words.length)];
    console.log(randomWordsPair)

    return (
        <div>hi :)</div>
    )
}

export default CardGenerator;
