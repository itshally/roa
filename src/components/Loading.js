import React, {Component} from 'react'
import {css} from '@emotion/react'
import {BeatLoader} from 'react-spinners'

const override = css `
  display: block;
  margin: 0 auto;
`;

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div >
                <BeatLoader
                    css={override}
                    size={25}
                    color={"#f6a7c1"}
                    loading={this.state.loading}/>
            </div>
        )
    }
}

export default Loading