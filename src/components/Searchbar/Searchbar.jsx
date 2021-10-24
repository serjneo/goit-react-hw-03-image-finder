import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import './Searchbar.scss';

class Searchbar extends Component {
  state = {
    text: '',
    };
    
  handleTextChange = e => {
    this.setState({
      text: e.currentTarget.value.toLowerCase(),
    });
    };
    
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.trim() === '') {
        toast.error('Enter text');
        return;
    }
    this.props.onSubmit(this.state.text);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className= "SearchForm-button">
            <span className= "SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleTextChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;