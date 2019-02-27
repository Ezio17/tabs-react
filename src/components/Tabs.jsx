import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    const elements = this.props.children.map((item) => {
      return {
        text: item.props.children,
        title: item.props.title,
      }
    })

    this.state = {
      isActiveTab: 0,
      element: elements,
    }

    this.clickOnButton = this.clickOnButton.bind(this);
  }

  clickOnButton({ index }) {
    this.setState({
      isActiveTab: index,
    })

    console.log("Title: " + this.state.element[index].title +
      ", Text: " + this.state.element[index].text
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
              onClick={() => this.clickOnButton({ index })}
            >
              {item.title}
            </button>
          )
          )}
        </div>
        <div className="tab_content">
          <p className="text">{this.state.element[this.state.isActiveTab].text}</p>
        </div>
      </div>
    )
  }
}

export default Tabs