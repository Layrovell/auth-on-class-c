import React from 'react';
import {unstickWords} from "../../helpers/helpers";

export class Input extends React.Component {
    render() {
        return (
            <label>
                {unstickWords(this.props.label)}
                <input
                    value={this.props.value}
                    onBlur={this.props.handler}
                    onChange={(e) => {
                        this.props.state(e);
                        this.props.handler();
                    }}
                    type={this.props.type}
                    placeholder= {unstickWords(this.props.label)}
                    className={`input ${this.props.message ? 'input-error' : ''}`}
                />
                {this.props.message && <div className="error-message">
                    {this.props.message}
                </div>}
            </label>
        );
    }
}
