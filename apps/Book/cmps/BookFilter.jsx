export class BookFilter extends React.Component {
  state = {
    filterBy: {
      price: '',
      name: '',
    },
  };

  handelChange = (ev) => {
    const val = ev.target.value;
    const field = ev.target.name;
    if (field === 'name') this.setState({ filterBy: { name: val } }, () => {
      this.props.onSetFilter(this.state.filterBy)
    })

    if (field === 'price') this.setState({ filterBy: { price: +val } }, () => {
      this.props.onSetFilter(this.state.filterBy)
    })
  };

  onFilterBy = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state.filterBy)
  };

  render() {
    return (
      <form className='book-search flex' onSubmit={this.onFilterBy}>
        <input type='text' name='name' placeholder='search' onChange={this.handelChange} />
        <input type='range' name='price' id='price' min='0' max='200' onChange={this.handelChange}></input>
        <label htmlFor='price'> price range</label>
      </form>
    );
  }
}
