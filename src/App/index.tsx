import React, { ReactElement } from "react";
import ReactDom from 'react-dom'
interface Props {
    title: string
    children: ReactElement
}

const App = function ({ title, children }: Props) {
    return <div>
        <h2>{ title }</h2>
        <div>
            { children }
        </div>
    </div>
}

export default (element: HTMLElement) => {
    ReactDom.render(<App title={ "hello world" }>
        <div>Rollup + Typescript + Babel</div>
    </App>, element)
}
