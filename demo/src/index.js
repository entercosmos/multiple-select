import React, {Component} from 'react'
import {render} from 'react-dom'
import {css} from 'emotion'
import {injectGlobal} from 'emotion'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        background-color: #fff;
    }
`

import MultipleSelect from '../../src'

class Example1 extends Component {

    state = {
        value: ['opt1', 'opt2']
    }

    render() {
        return <div>
            <h2>
                Default
            </h2>
            <div
                className={css`
                    width: 200px;
                    height: 40px;
                    display: flex;
                `}
            >
                <MultipleSelect
                    value={this.state.value}
                    alignLeft={true}
                    options={[{
                        id: 'opt1',
                        name: 'Option 1'
                    }, {
                        id: 'opt2',
                        name: 'Option 2'
                    }, {
                        id: 'opt3',
                        name: 'Option 3'
                    }]}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </div>
            <h3>
                State
            </h3>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        </div>
    }
}

class Demo extends React.Component {

    render() {

        return (
            <div>
                <h1>MultipleSelect Demo</h1>
                <Example1/>
            </div>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
