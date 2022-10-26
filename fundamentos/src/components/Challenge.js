export const Challenge = () => {
    const somar = () => {
        return console.log(1 + 2);
    }
    return (
        <div>
            <button onClick={somar}>SOMAR</button>
        </div>
    );
}