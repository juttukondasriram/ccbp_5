import './index.css'

const FaqItem = props => {
  const {faqItem, onPlusMinus, isPlus, classname} = props
  const {questionText, answerText} = faqItem
  const onPlusMinusButton = () => {
    onPlusMinus()
  }
  const iconUrl = isPlus
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
  const iconAlt = isPlus ? 'plus' : 'minus'
  return (
    <li className="card-container">
      <div className="alignment">
        <h1>{questionText}</h1>
        <button onClick={onPlusMinusButton} type="button" className="button">
          <img src={iconUrl} alt={iconAlt} />
        </button>
      </div>
      <div className={classname}>
        <hr />
        <p>{answerText}</p>
      </div>
    </li>
  )
}

export default FaqItem
