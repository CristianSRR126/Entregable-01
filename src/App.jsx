import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'

const arrayOfColor = [

  '#AA1241',
  '#7ED29C',
  '#151970',
  '#261A42',
  '#D270C2',
  '#8878FB',
  '#D4393F',
  '#B9E82B',
  '#1FDCF9',
  '#730741',
  '#6D9AB5',
  '#7244A6',
  '#F418BD',
  '#177BF8',
  '#E83357',
  '#433DDE',
  '#268427',
  '#1FDC54',
  '#6BF7A7',
  '#CED6BF',
  '#6464E4',
  '#7FBF46',
  '#808A13',
  '#81ACBF',
  '#DB278A',
  '#5B7E1F',
  '#6B204B',
  '#8D9BFF',
  '#360B94',
  '#57D8A8',
  '#260B83',
  '#21926A',
  '#A18739',
  '#03802E',
  '#440045',
  '#965E8F',
  '#7E9448',
  '#AFA42B',
  '#F70559',
  '#39029F',
  '#A244EC',
  '#2ABC67',
  '#37D4A4',
  '#907D58',
  '#62B131',
  '#7F590E',
  '#F07140',
  '#095A48',
  '#169BD8',
  '#9FECCF',
  '#416260',
  '#009561',
  '#2A3CD2',
  '#4F7417',
  '#C3FBAC',
  '#986E50',
  '#67063A',
  '#6BC358',
  '#B306C6',
  '#3C0724',
  '#8B313E',
  '#19722A',
  '#5966FD',
  '#5D2B10',
  '#1857CD',
  '#3F4ED2',
  '#C83A7D',
  '#045592',
  '#0A93D4',
  '#F92F58',
  '#2A2162',
  '#7F8BA8',
  '#4A1C5F',
  '#A527C0',
  '#ABADED',
  '#A9193E',
  '#C0E055',
  '#BE006E',
  '#EAD6E6',
  '#EAE9E0',
  '#FAE2E6',
  '#79DF9C',
  '#2A0F30',
  '#4F3751',
  '#A573A4',
  '#07590F',
  '#D1C0AA',
  '#965AF7',
  '#0B5996',
  '#33BA4F',
  '#5F38F3',
  '#33F272',
  '#2091FF',
  '#AAB338',
  '#862FE2',
  '#7D4193',
  '#11F9DF',
  '#1EFE21',
  '#F9CED0',
  '#A0CB24',
  '#FF96EF',
  '#126AA5'
]

function App() {

  const createRandon = array => {
    return Math.floor(Math.random() * array.length)
  }

  let numberRandonQuotes = createRandon(quotes)
  let numberRandonColors = createRandon(arrayOfColor)

  const [quotesRandon, setQuotesRandon] = useState(quotes[numberRandonQuotes])
  const [colorsRandon, setColorsRandon] = useState(arrayOfColor[numberRandonColors])

  const clickButton = () => {
    setQuotesRandon(quotes[numberRandonQuotes])
    setColorsRandon(arrayOfColor[numberRandonColors])
  }

  const appStyle = {
    backgroundColor: colorsRandon
  }

  return (
    <div className='App' style={appStyle}>

      <QuoteBox
        quotesRandon={quotesRandon}
        colorsRandon={colorsRandon}
        clickButton={clickButton}
      />

    </div>
  )
}

export default App
