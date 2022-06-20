import { useState } from 'react';

function Demo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(0);

    function handleClick() {
        // setCount(count + 1)
        setTimeout(() => {
            setCount(count + 1)
        }, 3000);
    }
    function handleClickFn() {
        // setCount((prevCount) => {
        //     return prevCount + 1
        // })
        setTimeout(() => {
            setCount((prevCount) => {
                return prevCount + 1
            })
        }, 3000)
    }
    return (
        <>
            Count: {count}
            <button onClick={handleClick}>+</button>
            <button onClick={handleClickFn}>+</button>
        </>
    );
}

export default Demo;