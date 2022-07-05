import React from 'react'
import {footerList1, footerList2, footerList3} from '../utils/constants'

const d = new Date();

const List = ({items}: {items: string[]}) => (
  <div className="flex flex-wrap gap-2 mt-5">
    {items.map((item) => (
      <p key={item} className="text-gray-400 text-em hover:underline cursor-pointer">
        {item}
      </p>
    ))}
</div>
)

export const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1}/>
      <List items={footerList2}/>
      <List items={footerList3}/>
      <p>Vidly {d.getFullYear()}</p>
    </div>
  )
}
