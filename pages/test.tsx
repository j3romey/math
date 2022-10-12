import * as React from "react";


import { MathComponent } from "mathjax-react";


function Test() {
    return (
        <div>
            <p>
                Hellow World
            </p>
            <MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />
        </div>
    )
}

export default Test