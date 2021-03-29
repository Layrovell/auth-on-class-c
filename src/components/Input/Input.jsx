import React from 'react';

export class Input extends React.Component {
    render() {
        return (
            <label>
                {this.props.label}
                <input
                    value={this.props.value}
                    onBlur={this.props.handler}
                    onChange={(e) => {
                        this.props.state(e);
                        this.props.handler();
                    }}
                    type="text"
                    placeholder="John"
                    className={`input ${this.props.message ? 'input-error' : ''}`}
                />
                {this.props.message && <div className="error-message">
                    {this.props.message}
                </div>}
            </label>
        );
    }
}

