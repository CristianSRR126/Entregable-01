import React from 'react'

const QuoteBox = ({ quotesRandon, colorsRandon, clickButton }) => {

  return (
    <article className='cardQuotes' style={{ color: `${colorsRandon}` }}>

      <span>
        <i className='bx bxs-quote-alt-left'></i> {quotesRandon.quote} <i className='bx bxs-quote-alt-right'></i>
        <cite>- {quotesRandon.author}</cite>
      </span>

      <button style={{ backgroundColor: `${colorsRandon}` }} onClick={clickButton}>
        <i className='bx bxs-right-arrow' style={{ color: '#ffffff' }}></i>
      </button>

    </article>
  )
}

export default QuoteBox
