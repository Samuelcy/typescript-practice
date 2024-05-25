import React from "react";

// function Greeter() {
//     return <h1 >Hello!</h1>
// }

interface GreeterProps {
    person: string;
}

function Greeter({ person }: GreeterProps): JSX.Element {
    return <h1 >Hello, {person}!</h1>
}

// function Greeter(props: GreeterProps): JSX.Element {
//     return <h1 >Hello, {props.person}!</h1>
// }

// function Greeter(props: { person: string }): JSX.Element {
//     return <h1 >Hello, {props.person}!</h1>
// }



export default Greeter;