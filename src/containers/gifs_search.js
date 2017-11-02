import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifs } from '../actions/index';
import { Link } from 'react-router';

class GifsSearch extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentWillMount() {
		this.props.getGifs('funny');
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.getGifs(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (
			<div className="input-group">
			<form 
                className="input-group" 
                onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Enter a gif name"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getGifs }, dispatch);
}

export default connect(null, mapDispatchToProps)(GifsSearch);