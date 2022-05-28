import React from 'react'

const QuoteBox = ({ quotesRando, colorRando, clickButton }) => {

  const styleButton = {
    backgroundColor: colorRando
  }

  return (
    <article className='cardQuotes'>

      <span style={{color: `${colorRando}`}}><i className='bx bxs-quote-alt-left'></i> {quotesRando.quote} <i className='bx bxs-quote-alt-right'></i>
        <cite>- {quotesRando.author}</cite>
      </span>

      <button style={styleButton} onClick={clickButton}>
        <i className='bx bxs-right-arrow' style={{ color: '#ffffff' }}></i>
      </button>

    </article>
  )
}

export default QuoteBox
