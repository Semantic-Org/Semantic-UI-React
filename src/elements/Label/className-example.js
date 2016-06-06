class Example extends React.Component {
  state = {}

  componentDidMount() {
    const classes = document
      .getElementById('my-label')
      .getAttribute('class')

    this.setState({ classes })
  }

  render() {
    return (
      <div>
        <p>
          <Label id='my-label' className='hello'>Default</Label>
        </p>
        <p>
          <b>className</b>: <code>{this.state.classes}</code>
        </p>
      </div>
    )
  }
}
