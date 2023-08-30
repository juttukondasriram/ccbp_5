import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {isPlus: true, classname: 'first'}

  onPlusMinus = () => {
    const {isPlus, classname} = this.state
    if (classname === 'first') {
      this.setState({isPlus: !isPlus, classname: 'second'})
    } else {
      this.setState({isPlus: !isPlus, classname: 'first'})
    }
  }

  render() {
    const {faqsList} = this.props
    const {isPlus, classname} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">FAQs</h1>
        <ul className="list-style">
          {faqsList.map(eachItem => (
            <FaqItem
              key={eachItem.id}
              isPlus={isPlus}
              classname={classname}
              onPlusMinus={this.onPlusMinus}
              faqItem={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
