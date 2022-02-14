import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import "../styles/Widgets.css"

function Widgets() {

   const newsArticle = (heading, subtitle) => (
       <div className="widgets__article">
           <div className="widgets__articleLeft">
                <FiberManualRecord />
           </div>
           <div className="widgets__articleRight">
               <h4>{heading}</h4>
               <p>{subtitle}</p>
           </div>
       </div>
   )

  return (
    <div className="widgets">
      <div className="widgets__header">
          <h2>LinkedIn News</h2>
          <Info />
      </div>
      {newsArticle("Ibrahim Chahboune", "Hot news")}
      {newsArticle("Coronavirus - Morocco updates", "Top news - 1251 readers")}
      {newsArticle("Tesla plans reach new highs", "Cars & Auto - 815 readers")}
      {newsArticle("Bitcoin reaches 42786 USD", "Crypto - 8949 readers")}
      {newsArticle("Is Next the next big thing", "Code - 7949 readers")}
      {newsArticle("Ibrahim Chahboune portfolio", "Top news - 5494 readers")}
    </div>
  )
}

export default Widgets
