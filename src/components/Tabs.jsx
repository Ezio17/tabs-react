import React from 'react'

class SetTab extends React.Component {
  constructor(props) {
    super(props)

    this.elements = this.props.children.map((item) => {
      return {
        text: item.props.children,
        title: item.props.title,
      }
    })

    this.state = {
      text: this.elements[0].text,
      isActiveTab: 0,
      element: this.elements,
    }

    this.clickOnButton = this.clickOnButton.bind(this);
  }

  clickOnButton({ index, item }) {
    this.setState({
      text: this.elements[index].text,
      isActiveTab: index,
    })

    console.log("Title: " + item.title +
      ", Text: " + this.elements[index].text
    )
  }

  render() {
    return (
      <div className="wrapper">
        <div id="buttons">
          {this.state.element.map((item, index) => (
            <button
              className={this.state.isActiveTab === index ? "tab active" : "tab"}
              key={index}
              onClick={() => this.clickOnButton({ index, item })}
            >
              {item.title}
            </button>
          )
          )}
        </div>
        <div className="tab_content">
          <p className="text">{this.state.text}</p>
        </div>
      </div>
    )
  }
}

export default SetTab