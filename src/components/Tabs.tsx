'use client'

import { useState } from 'react'
import clsx from 'clsx'

const Tab = ({
  isSelected,
  title,
  onClick,
}: {
  isSelected: boolean
  title: string
  onClick: () => void
}) => {
  return (
    <li className='me-2 cursor-pointer text font-semibold'>
      <span
        onClick={onClick}
        className={clsx(
          'inline-block p-4 rounded-t-lg',
          isSelected ? 'text-white border-b-2 border-white' : 'text-blue-500',
        )}
      >
        {title}
      </span>
    </li>
  )
}

export const Tabs = () => {
  const [tab, setTab] = useState<'EMOJI' | 'WORD'>('EMOJI')

  return (
    <div className='text-center'>
      <ul className='flex flex-wrap -mb-px justify-center'>
        <Tab
          key='emoji'
          title='Avec des emojis'
          isSelected={tab === 'EMOJI'}
          onClick={() => setTab('EMOJI')}
        />
        <Tab
          key='word'
          title='Avec une phrase'
          isSelected={tab === 'WORD'}
          onClick={() => setTab('WORD')}
        />
      </ul>
    </div>
  )
}
