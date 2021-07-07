import React from 'react'

function HeroName({name}) {
   if(name==="Jay")
   throw new Error('Not a Hero.!!')
   else
   return<h1>{name}</h1>
}

export default HeroName
